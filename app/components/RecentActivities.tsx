'use client';

import React from 'react';
import { StravaActivity } from '../strava';
import ActivityCard from './ActivityCard';

export default function RecentActivities({ stravaActivities, stravaProfileUrl }: { stravaActivities: StravaActivity[], stravaProfileUrl: string }) {
  if (stravaActivities == null || stravaProfileUrl == null) {
    return null;
  }

  return (
    <>
      <div className="grid col-span-12">
        <div className="divider">Recent Activities</div>
      </div>

      {stravaActivities.map((activity) => (
        <div key={activity.id} className="grid col-span-12 md:col-span-4">
          <ActivityCard activity={activity} />
        </div>
      ))}

      <div className="grid col-span-12 place-items-center">
        <a className="btn btn-wide" target="_blank" href={stravaProfileUrl} rel="noreferrer">
          See More Activities
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>

      <div className="grid col-span-12">
        <div className="divider" />
      </div>
    </>
  );
}
