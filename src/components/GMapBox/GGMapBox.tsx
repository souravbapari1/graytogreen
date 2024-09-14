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

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg";

const GGMapBox: React.FC<{
  className?: string;
  style?: CSSProperties;
  disableScroll?: boolean;
}> = ({ className, style, disableScroll }) => {
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
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/standard-satellite",
        center: center,
        zoom: 5,
      });
      if (disableScroll) {
        mapRef.current.scrollZoom.disable();
      }

      mapRef.current.on("load", () => {
        setMapLoaded(true); // Set the state to true when the map is loaded
      });

      mapRef.current.on("click", (e) => {
        const { lng, lat } = e.lngLat;
        console.log(lng, lat);

        setCenter([lng, lat]);
        mapRef.current?.flyTo({
          center: [lng, lat],
          zoom: 10, // Adjust the zoom level as needed
          speed: 1.5, // Fly speed
          curve: 1, // Smoothness of the fly transition
          essential: true, // This ensures the animation is not skipped when the tab is inactive
        });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-96 h-full z-10 left-0 top-0 bg-transparent absolute px-3 py-3 overflow-hidden">
        <div className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden pt-3">
          <div
            className={`w-full h-12 border-b  flex text-sm justify-center gap-10 items-center font-semibold ${montserrat.className}`}
          >
            <p className="underline-offset-2 underline text-main">
              Top Projects
            </p>
            <p>All Projects</p>
            <FiSearch size={20} />
          </div>
          <div
            className={`${montserrat.className} w-full h-full text-xs px-5  overflow-scroll pb-20`}
          >
            {Array.from({ length: 30 }).map((_, i) => {
              return (
                <PopupContent className="w-full mt-3" key={"project_" + i} />
              );
            })}
          </div>
        </div>
      </div>
      <div
        ref={mapContainerRef}
        style={style ?? { width: "100%", height: "85vh" }}
        className={cn(
          "rounded-3xl overflow-hidden shadow-2xl w-full h-full",
          className
        )}
      />
      {mapLoaded &&
        markersData.map((marker, index) => (
          <CustomMarker
            key={index}
            map={mapRef.current!}
            coordinates={marker.coordinates as any}
            markerImage={marker.markerImage}
            PopupContent={<PopupContent />}
          />
        ))}
      {mapLoaded &&
        polygonsData.map((polygon) => (
          <PolygonLayer
            key={polygon.id}
            map={mapRef.current!}
            id={polygon.id}
            coordinates={polygon.coordinates}
            fillColor={polygon.fillColor}
            fillOpacity={polygon.fillOpacity}
            lineColor={polygon.lineColor}
            lineWidth={polygon.lineWidth}
          />
        ))}
    </div>
  );
};

export default GGMapBox;
