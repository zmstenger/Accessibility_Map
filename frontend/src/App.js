import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import LocationDetails from './components/LocationDetails'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

const UCCoordinates = [39.1317, -84.515]

function App() {
  return (
    <Router>
      <div className='App'>
        <SearchBar />
        <div className='content'>
          <LocationDetails />
          <MapContainer center={UCCoordinates} zoom={16} style={{height: '500px', width: '100%'}}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={UCCoordinates}>
              <Popup>University of Cincinnati</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Router>
  )
}

export default App
