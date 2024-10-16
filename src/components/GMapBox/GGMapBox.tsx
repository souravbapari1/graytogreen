"use client";
import React, { CSSProperties, memo, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomMarker from "./Parts/marker";
import PolygonLayer from "./Parts/PolygonLayer";
import { PopupContent } from "./Parts/PopupContent";
import { markersData, polygonsData } from "./data";
import { cn } from "@/lib/utils";
import { montserrat } from "@/fonts/font";

import { FiSearch } from "react-icons/fi";
import PlatformMenu, { MobPlatformMenu } from "./PlatformMenu";

import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setPlatformData,
  setPlatformFilter,
  setSelectedProject,
  unselectPlatformProject,
} from "@/redux/slices/platformSlice";
import { set } from "date-fns";
import ProjectView from "./ProjectView";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";

export const Markersmages = {
  bilding: "/assets/bilding.svg",
  bird: "/assets/bird.svg",
  fence: "/assets/fence.svg",
  plants: "/assets/plants.svg",
  roots: "/assets/roots.svg",
  tree: "/assets/tree.svg",
  work: "/assets/work.svg",
  plastic: "/assets/plastic.svg",
};

const keys = Object.keys(Markersmages);
type MarkerType = keyof typeof Markersmages;

export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2hhbmdlaXQtMjAyNCIsImEiOiJjbHlsNmd5M2MxY3lrMmpyM25ieWloeTk2In0.tD7fz5cEA7wAmR4lNBgsaQ";

const GGMapBox: React.FC<{
  className?: string;
  style?: CSSProperties;
  disableScroll?: boolean;
  data?: Collection<ProjectItem>;
}> = ({ className, style, disableScroll, data }) => {
  const state = useAppSelector((e) => e.platformSlice);
  const dispatch = useAppDispatch();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [center, setCenter] = useState<[number, number]>([
    57.22343956645474, 21.288218077111807,
  ]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize(); // Trigger a resize to fix rendering issues
    }
    dispatch(setPlatformData(data?.items || []));
    dispatch(setPlatformFilter(data?.items || []));

    dispatch(unselectPlatformProject());
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: center,
        zoom: 5,
      });
      if (disableScroll) {
        mapRef.current.scrollZoom.disable();
      }
      mapRef.current.setStyle("mapbox://styles/mapbox/standard-satellite");
      mapRef.current.dragRotate.disable();

      mapRef.current.on("load", () => {
        setMapLoaded(true); // Set the state to true when the map is loaded
      });

      // mapRef.current.on("click", (e) => {
      //   const { lng, lat } = e.lngLat;
      //   console.log(lng, lat);
      //   setCenter([lng, lat]);
      // });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (state.selectedProject) {
      if (mapRef.current) {
        mapRef.current.flyTo({
          center: [
            state.selectedProject.marker.position.lng,
            state.selectedProject.marker.position.lat,
          ],
          zoom: 15,
        });
      }
    } else {
      if (mapRef.current) {
        mapRef.current.flyTo({
          center: [center[0], center[1]],
          zoom: 5,
        });
      }
    }
  }, [state.selectedProject]);

  return (
    <div className="relative">
      <div className="lg:block hidden">
        {state.filter &&
          (state.selectedProject ? (
            <ProjectView />
          ) : (
            <PlatformMenu data={state.filter} />
          ))}
      </div>
      <MobPlatformMenu data={state.filter} />
      <div
        ref={mapContainerRef}
        style={style ?? { width: "100%", height: "85vh" }}
        className={cn(
          "rounded-3xl overflow-hidden shadow-2xl w-full h-full",
          className
        )}
      />
      {mapLoaded &&
        !state.selectedProject &&
        data?.items?.map((marker, index) => (
          <CustomMarker
            key={index}
            map={mapRef.current!}
            coordinates={[
              marker.marker.position.lng,
              marker.marker.position.lat,
            ]}
            onPopupClick={() => {
              dispatch(
                setSelectedProject({
                  project: marker,
                  type: marker.type,
                })
              );
            }}
            image={"/icons" + marker.marker.image}
            color={marker.marker.color}
            PopupContent={<PopupContent data={marker} />}
          />
        ))}
      {mapLoaded &&
        state.selectedProject &&
        state.selectedProject.workareas.features.map((polygon: any) => (
          <PolygonLayer
            key={polygon.id}
            map={mapRef.current!}
            id={polygon.id}
            coordinates={polygon.geometry.coordinates[0]}
            fillColor={"green"}
            fillOpacity={0}
            lineColor={"white"}
            lineWidth={4}
          />
        ))}
    </div>
  );
};

export default GGMapBox;
