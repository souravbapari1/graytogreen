"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MAPBOX_ACCESS_TOKEN } from "@/components/GMapBox/GGMapBox";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ChartPie, Image, Navigation, Share2, TreePine } from "lucide-react";

const TreeMap = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  const [setshowPopup, setSetshowPopup] = useState(false);

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

  const [viewport, setViewport] = useState({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    zoom: 10,
  });

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 3,
      });
      mapRef.current.scrollZoom.disable();

      // Listen for the `load` event to know when the map is fully loaded
      mapRef.current.on("load", () => {
        setMapLoaded(true); // Set the state to true when the map is loaded

        // Create a custom marker element for the initial center
        const markerElement = document.createElement("div");
        markerElement.style.width = "20px";
        markerElement.style.height = "20px";
        markerElement.style.backgroundColor = "red";
        markerElement.style.borderRadius = "50%";
        markerElement.style.border = "2px solid white";

        // Add the custom marker to the map
        new mapboxgl.Marker({ element: markerElement })
          .setLngLat(center)
          .addTo(mapRef.current as any);
      });

      // Add a click event listener to show an alert on click
      mapRef.current.on("click", (event) => {
        const { lng, lat } = event.lngLat;
        setSetshowPopup(true);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [center]);

  return (
    <div className="w-full h-full">
      <div
        ref={mapContainerRef}
        style={{ height: "100%", width: "100%" }}
      ></div>
      <Dialog open={setshowPopup} onOpenChange={setSetshowPopup}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tree Details</DialogTitle>
            <DialogDescription className="mt-10 block">
              <div className="flex justify-between items-center  mt-5 p-2 bg-primary/5 gap-5 w-full text-sm">
                <h1>Order ID</h1>
                <p>3462</p>
              </div>
              <div className="flex justify-between items-center p-2 gap-5 w-full text-sm">
                <h1>Tree ID</h1>
                <p>3462</p>
              </div>
              <div className="flex justify-between items-center p-2 bg-primary/5 gap-5 w-full text-sm">
                <h1>Order ID</h1>
                <p>3462</p>
              </div>
              <div className="flex justify-between items-center p-2 gap-5 w-full text-sm">
                <h1>Tree ID</h1>
                <p>3462</p>
              </div>
              <div className="flex justify-between items-center p-2 bg-primary/5 gap-5 w-full text-sm">
                <h1>Order ID</h1>
                <p>3462</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-5 gap-2 w-full ">
            <div className="w-12 h-12 border-primary/5 mx-auto border-2 rounded-full bg-primary/30 flex justify-center items-center hover:bg-primary hover:text-white text-primary">
              <Navigation size={18} />
            </div>
            <div className="w-12 h-12 border-primary/5 mx-auto border-2 rounded-full bg-primary/30 flex justify-center items-center hover:bg-primary hover:text-white text-primary">
              <ChartPie size={18} />
            </div>
            <div className="w-12 h-12 border-primary/5 mx-auto border-2 rounded-full bg-primary/30 flex justify-center items-center hover:bg-primary hover:text-white text-primary">
              <Image size={18} />
            </div>
            <div className="w-12 h-12 border-primary/5 mx-auto border-2 rounded-full bg-primary/30 flex justify-center items-center hover:bg-primary hover:text-white text-primary">
              <TreePine size={18} />
            </div>
            <div className="w-12 h-12 border-primary/5 mx-auto border-2 rounded-full bg-primary/30 flex justify-center items-center hover:bg-primary hover:text-white text-primary">
              <Share2 size={18} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TreeMap;
