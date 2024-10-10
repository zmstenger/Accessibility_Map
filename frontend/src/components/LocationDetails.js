import React from 'react';
import '../styles/LocationDetails.css';

const LocationDetails = () => {
  return (
    <div className="location-details">
      <h3>Location Name</h3>
      <img src="/imgs/University.jpeg" alt="Location" />
      <p>Accessibility Rating: 4/5</p>
      <p>Accessibility Options:</p>
      <ul>
        <li>Ramps</li>
        <li>Elevators</li>
        <li>Handrails</li>
      </ul>
      <p>User Comments:</p>
      <ul>
        <li>"Very accessible!"</li>
        <li>"Parking was limited."</li>
      </ul>
    </div>
  );
};

export default LocationDetails;
