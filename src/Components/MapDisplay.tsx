import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import axios from "axios";

const api = "780394a78657001a17b66be2b1695f61";

interface MapDisplayProps {
  lat: number;
  long: number;
}


const MapDisplay = ({ lat, long }: MapDisplayProps) => {
  const position: LatLngTuple = [lat, long];
  return (
    <div style={{ height: "400px", width: "100%" }}>
      {/* <MapContainer center={[lat,long]} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};

export default MapDisplay;
