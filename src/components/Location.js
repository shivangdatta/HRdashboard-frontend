import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Location = ({ loc, address }) => {
    return (
        <div className='rounded-lg p-6'>
            <div className='text-lg font-semibold mb-4'>
                Location Details
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='text-sm font-medium'>
                    <div><span className='font-semibold'>Address:</span> {address}</div>
                    <div><span className='font-semibold'>Latitude, Longitude:</span> {loc.latitude}, {loc.longitude}</div>
                </div>
                <div className='h-64'>
                    <MapContainer center={[loc.latitude, loc.longitude]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[loc.latitude, loc.longitude]}>
                            <Popup>
                                {address}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Location;
