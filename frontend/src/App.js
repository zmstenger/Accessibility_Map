import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import LocationDetails from './components/LocationDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />

        <div className="content">
          <LocationDetails />
          <MapView />
        </div>
      </div>
    </Router>
  );
}

export default App;
