'use client';

import React from 'react';
import {
  MapContainer, Polyline, Popup, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import './map.css';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { RouteCoord } from '../types/RouteCoord';
import { Donation } from '../fundraising/types/Donation';

dayjs.extend(calendar);

const mapCenter = { lat: 51.4933006, lng: -0.0408809 };

interface MapProps {
  routeCoords: RouteCoord[]
  donations: Donation[]
}

export default function Map({ routeCoords, donations }: MapProps) {
  const colours = [
    '#EA526F',
    '#4BC6B9',
    '#791E94',
    '#0A014F',
  ];

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{ color: 'grey', weight: 4 }} positions={routeCoords.map(({ lat, lon }) => [lat, lon])} />
        {
          donations.map((donation, donationIndex) => {
            if (donation.donationMap == null) return null;

            const colour = colours[donationIndex % colours.length];

            return (
              <Polyline
                key={donation.id}
                pathOptions={{ color: colour, weight: 4 }}
                positions={donation.donationMap?.coords.map(({ lat, lon }) => [lat, lon])}
              >
                <Popup>
                  <h4><strong>{donation.donorDisplayName}</strong></h4>
                  <p>
                    <strong>Donation Date:</strong>
                    {' '}
                    {dayjs(donation.donationDate).calendar(null, { sameElse: 'DD/MM/YYYY [at] h:mm A' })}
                  </p>
                  <p>
                    <strong>Donation Amount:</strong>
                    {' '}
                    £
                    {donation.displayAmount}
                  </p>
                  <p>
                    <strong>Donation Distance:</strong>
                    {' '}
                    {donation.donationMap.donationDistanceDisplay}
                  </p>
                  {
                    donation.message != null
                    && (
                      <p>
                        &ldquo;
                        {donation.message}
                        &rdquo;
                      </p>
                    )
                  }

                </Popup>
              </Polyline>
            );
          })
        }
      </MapContainer>
    </div>
  );
}
