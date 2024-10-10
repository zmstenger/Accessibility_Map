import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/MapView.css';
import 'leaflet/dist/leaflet.css';

const UCCoordinates = [39.1317, -84.515]; // University of Cincinnati coordinates

const MapView = () => {
  return (
    <MapContainer center={UCCoordinates} zoom={16} style={{height: '500px', width: '100%'}}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={UCCoordinates}>
        <Popup>University of Cincinnati</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
