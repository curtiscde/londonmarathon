'use client';

import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "./map.css"
import { coords } from "./lmCoords.json"

export default function Map() {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <MapContainer center={{ lat: 51.5072, lng: 0.1276 }} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: 51.5072, lng: 0.1276 }}>
          <Popup>
            Test Popup
          </Popup>
        </Marker>
        <Polyline pathOptions={{ color: 'yellow' }} positions={coords.map(({ lat, lon }) => [Number(lat), Number(lon)])} />
      </MapContainer>
    </div>
  )
}
