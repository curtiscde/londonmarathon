'use client';

import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "./map.css"
import { coords } from "./lmCoords.json"

const mapCenter = { lat: 51.4955006, lng: -0.0408809 }
const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY

export default function Map() {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <MapContainer center={mapCenter} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerKey}`}
        />
        <Polyline pathOptions={{ color: 'grey', weight: 4 }} positions={coords.map(({ lat, lon }) => [Number(lat), Number(lon)])}>
          <Popup>
            Test Popup
          </Popup>
        </Polyline>
      </MapContainer>
    </div>
  )
}
