
import React from 'react';
import { GoogleMap,  Marker, } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100px',
};

function MapComponent({ center, zoom }) {
 
  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
      <Marker position={center} />
      </GoogleMap>
  );
}

export default MapComponent;
