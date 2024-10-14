import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/MapView.css';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const UCCoordinates = [39.1317, -84.515]; // University of Cincinnati coordinates

const MapView = () => {
  const [locations, setLocations] = useState([]);

  // Fetch locations from the backend API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5232/api/locations'); 
        console.log('Fetched locations:', response.data); // Log the data
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
  
    fetchLocations();
  }, []);


  return (
    <MapContainer center={UCCoordinates} zoom={17.5} style={{height: '100vh', width: '100%'}}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.locationID} position={[39.1317, -84.515]}>
          <Popup>
            <div>
              <strong>{location.locationName}</strong><br />
              id: {location.locationID}<br />
              latitude: {location.latitude}<br />
              longitude: {location.longitude}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
