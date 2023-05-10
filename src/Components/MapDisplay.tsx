import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { LatLngTuple } from "leaflet";
import axios from "axios";

interface MapDisplayProps {
  lat: number;
  long: number;
}

const MapDisplay = ({ lat, long }: MapDisplayProps) => {
  const position: [number, number] = [lat, long];
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState("");
  return (
    <div style={{ height: "400px", width: "100%" }}>
      {/* <MapContainer center={{lat, long}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer> */}
      
    </div>
  );
};

export default MapDisplay;
