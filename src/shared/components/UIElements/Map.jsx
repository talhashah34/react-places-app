import React, { useRef, useEffect } from 'react';
import './Map.css';

const Map = ({ center, zoom, className, style }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom
      });

      new window.google.maps.Marker({ position: center, map: map });
    };

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${className}`} style={style}></div>
  );
};

export default Map;
