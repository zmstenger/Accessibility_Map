import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/MapView.css';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 39.1031,
  lng: -84.5120 
};

const MapView = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={{ lat: 39.1031, lng: -84.5120 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
