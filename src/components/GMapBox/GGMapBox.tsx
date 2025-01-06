"use client";
import { cn } from "@/lib/utils";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import CustomMarker from "./Parts/marker";
import PolygonLayer from "./Parts/PolygonLayer";
import { PopupContent } from "./Parts/PopupContent";

import PlatformMenu, { MobPlatformMenu } from "./PlatformMenu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { montserrat } from "@/fonts/font";
import { Collection } from "@/interface/collection";
import { ProjectItem } from "@/interface/project";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setPlatformData,
  setPlatformFilter,
  setSelectedProject,
  unselectPlatformProject,
} from "@/redux/slices/platformSlice";
import { ArrowDownUpIcon, LandPlot } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ProjectView from "./ProjectView";
import { useFilterState } from "./useFilterState";
import SupportBox from "./SupportBox";
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

  const { mapCenter } = useFilterState();
  const params = useSearchParams();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize(); // Trigger a resize to fix rendering issues
    }

    dispatch(unselectPlatformProject());
  }, []);

  useEffect(() => {
    dispatch(setPlatformData(data?.items || []));
    dispatch(setPlatformFilter(data?.items || []));
  }, [data]);
  const [selectedArea, setSelectedArea] = useState<any>(null);

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
      mapRef.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          visualizePitch: false,
        }),
        "bottom-right"
      );

      // Listen for the `load` event to know when the map is fully loaded

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
    if (mapCenter) {
      if (mapRef.current) {
        mapRef.current.flyTo({
          center: mapCenter,
          zoom: 17,
        });
      }
    }
  }, [mapCenter]);

  useEffect(() => {
    if (state.selectedProject) {
      if (mapRef.current) {
        setSelectedArea(null);
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

  function getCenterLatLng(
    areaName: string,
    fullData: ProjectItem["workareas"]
  ) {
    // Find area ID from areaInfo using areaName
    const areaInfo = fullData.areaInfo.find(
      (area) => area.areaName === areaName
    );
    if (!areaInfo) {
      return null;
    }

    // Find the matching feature in workAreaData using the area ID
    const areaFeature = fullData.workAreaData.features.find(
      (feature) => feature.id === areaInfo.id
    );
    if (!areaFeature) {
      return null;
    }

    const coordinates = areaFeature.geometry.coordinates[0]; // Polygon coordinates

    // Calculate centroid
    let totalLat = 0;
    let totalLng = 0;
    coordinates.forEach(([lng, lat]) => {
      totalLat += lat;
      totalLng += lng;
    });

    const numPoints = coordinates.length;
    const centerLat = totalLat / numPoints;
    const centerLng = totalLng / numPoints;

    return { lat: centerLat, lng: centerLng };
  }
  const { setMapCenter } = useFilterState();

  useEffect(() => {
    if (selectedArea && state.selectedProject?.workareas) {
      const center = getCenterLatLng(
        selectedArea.areaName as string,
        state.selectedProject?.workareas
      );

      if (center) {
        setMapCenter(center);
      }
    }
  }, [selectedArea]);

  return (
    <div className="relative">
      {params.get("support") && (
        <div className="w-full flex justify-center items-center  mx-auto fixed top-24 right-0 left-0 z-50">
          <SupportBox />
        </div>
      )}
      {state.selectedProject && (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-64  bg-white z-20 absolute top-3 right-3 rounded-xl shadow-md p-1 ">
            {selectedArea ? (
              <div className="flex justify-between gap-4 w-full   hover:bg-slate-50 items-center p-2 rounded-xl">
                <div className="flex justify-center items-center gap-3">
                  <LandPlot className="text-primary" />
                  <div className="text-xs text-left">
                    <p className="font-bold text-sm">{selectedArea.areaType}</p>
                    <p>{selectedArea.areaName}</p>
                  </div>
                </div>
                <ArrowDownUpIcon
                  size={24}
                  className="text-primary/90 bg-primary/10 p-1.5 rounded-sm"
                />
              </div>
            ) : (
              <div className="flex justify-between gap-4 w-full   hover:bg-slate-50 items-center p-2 rounded-xl">
                <div className="flex justify-center items-center gap-3">
                  <LandPlot className="text-primary" />
                  <div className="text-xs">
                    <p className="font-bold text-sm">Select Area</p>
                  </div>
                </div>
                <ArrowDownUpIcon
                  size={24}
                  className="text-primary/90 bg-primary/10 p-1.5 rounded-sm"
                />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Area</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {state.selectedProject?.workareas.areaInfo.map((e, i) => {
              return (
                <DropdownMenuItem key={i} className="p-0">
                  <div
                    onClick={() => {
                      setSelectedArea(e);
                    }}
                    className={
                      "flex justify-start gap-4 w-60   hover:bg-slate-50 items-center  rounded-xl text-sm px-2 py-1 " +
                      montserrat.className
                    }
                  >
                    <LandPlot className="text-gray-950" />
                    <div className="text-xs">
                      <p className="font-bold ">{e.areaType}</p>
                      <p>{e.areaName}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

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
            image={"/icons" + marker.marker.values.image}
            color={marker.marker.values.color}
            PopupContent={<PopupContent data={marker} />}
          />
        ))}
      {mapLoaded &&
        state.selectedProject &&
        state.selectedProject.workareas.workAreaData.features.map(
          (polygon: any) => (
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
          )
        )}
    </div>
  );
};

export default GGMapBox;
