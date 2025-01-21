import { useEffect, useRef } from "react";
import './Map.css'
import React from 'react'

export default function Map(props) {
    const mapRef = useRef();
    // const { AdvancedMarkerElement } =  window.google.maps.importLibrary("marker");
    const {center,zoom} = props;
    useEffect(()=>{
        const map = new window.google.maps.Map(mapRef.current,{
            center:center,
            zoom:zoom,
            mapId: "DEMO_MAP_ID",
        });
    
        new window.google.maps.marker.AdvancedMarkerElement({position: center, map: map});
    },[center,zoom])

    
  return (
    <div ref = {mapRef} className={`map ${props.className}`} style={props.style}>
      
    </div>
  )
}
