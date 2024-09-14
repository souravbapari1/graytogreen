import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import mapboxgl from "mapbox-gl";

// CustomMarker Component to create reusable markers with popups
interface CustomMarkerProps {
  map: mapboxgl.Map;
  coordinates: [number, number];
  markerImage: string;
  PopupContent: React.ReactElement;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  map,
  coordinates,
  markerImage,
  PopupContent,
}) => {
  useEffect(() => {
    // Create marker element
    const markerElement = document.createElement("div");
    markerElement.className = "custom-marker";
    markerElement.style.backgroundImage = `url(${markerImage})`;
    markerElement.style.width = "50px";
    markerElement.style.height = "50px";
    markerElement.style.backgroundSize = "cover";
    markerElement.style.borderRadius = "50%";

    // Render popup content to HTML string
    const popupContent = ReactDOMServer.renderToString(PopupContent);

    // Create Popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

    // Add Marker with popup to the map
    new mapboxgl.Marker({ element: markerElement })
      .setLngLat(coordinates)
      .setPopup(popup)
      .addTo(map);

    // Cleanup when the component is unmounted
    return () => {
      markerElement.remove();
    };
  }, [map, coordinates, markerImage, PopupContent]);

  return null;
};

export default CustomMarker;
