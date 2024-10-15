'use client';

import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "./map.css"
import { RouteCoord } from "../types/RouteCoord";
import { Donation } from "../fundraising/types/Donation";

const mapCenter = { lat: 51.4933006, lng: -0.0408809 }

interface MapProps {
  routeCoords: RouteCoord[]
  donations: Donation[]
}

export default function Map({ routeCoords, donations }: MapProps) {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{ color: 'grey', weight: 4 }} positions={routeCoords.map(({ lat, lon }) => [lat, lon])} />
        {
          donations.map((donation) => {
            if (donation.donationMap == null) return null
            return (
              <Polyline key={donation.id} pathOptions={{ color: 'blue', weight: 4 }} positions={donation.donationMap?.coords.map(({ lat, lon }) => [lat, lon])}>
                <Popup>
                  {donation.donorDisplayName}
                </Popup>
              </Polyline>
            )
          })      
        }
      </MapContainer>
    </div>
  )
}
