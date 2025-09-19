import React, { useRef, useEffect } from 'react'

import './Map.css'


const Map = ({center, zoom, className, style}) => {
    const mapRef = useRef(null)
    
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        })
    
        new window.google.maps.Marker({position: center, map: map})
    }, [center, zoom])

  return (
    <div ref={mapRef} className={`map ${className}`} style={style}>
      
    </div>
  )
}

export default Map


// Google API Key AIzaSyBBY4DYhHTtq4Z8gXS0OLrEv5nY92YfmqE