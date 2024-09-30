"use client";

import { MAPBOX_ACCESS_TOKEN } from "@/components/GMapBox/GGMapBox";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
function UserMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [center, setCenter] = useState<[number, number]>([
    -68.137343, 45.137451,
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
        style: "mapbox://styles/mapbox/streets-v12",
        center: center,
        zoom: 3,
      });
      mapRef.current.scrollZoom.disable();

      // Listen for the `load` event to know when the map is fully loaded
      mapRef.current.on("load", () => {
        setMapLoaded(true); // Set the state to true when the map is loaded
      });

      mapRef.current.on("click", (e) => {
        const { lng, lat } = e.lngLat;
        console.log(lng, lat);

        setCenter([lng, lat]);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);
  return (
    <div>
      <div ref={mapContainerRef} style={{ height: " 20rem", width: "100%" }} />
    </div>
  );
}

export default UserMap;
