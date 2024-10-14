import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView'; 

function App() {
  return (
    <Router>
      <div className='App'>
        <SearchBar />
        <div className='content'>
          
          <MapView />
        </div>
      </div>
    </Router>
  );
}

export default App;
