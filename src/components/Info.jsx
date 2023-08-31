import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Info.css'; // Import your CSS file for styling
import {FcSlrBackSide} from 'react-icons/fc';

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Info = () => {
  return (
    <div className="layout-container">
       <div className="top-text">
        <h2 className="c-2-title"><FcSlrBackSide /> TOUR VIRTUAL</h2>
        <p className="c-2">Conheça a Soberana através de um tour virtual do nosso espaço interno. </p>
      </div>
      <div className="side-space" />
      <div className="map-window">
        <LoadScript googleMapsApiKey="AIzaSyDoGBVFrJoNYJE00C3TAlIup5skPz-Q6fU">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={8}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="side-space" />
    </div>
  );
};

export default Info;

