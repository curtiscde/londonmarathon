'use client'

import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { StravaActivity } from "../strava";

dayjs.extend(calendar);

interface ActivityCardProps {
  activity: StravaActivity
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="card bg-base-300 rounded-box">
      <div className="card-body">
        <h2 className="card-title">{activity.name}</h2>
        <h6
          className="mb-2 font-medium leading-tight text-surface/75 dark:text-neutral-300">
          {dayjs(activity.date).calendar(null, {
            sameElse: "DD/MM/YYYY [at] h:mm A"
          })}
        </h6>

        <div className="stats shadow w-full mt-2 mb-4">
          <div className="stat">
            <div className="stat-title text-xs">Distance</div>
            <div className="stat-value text-2xl">{activity.distanceFormatted}</div>
          </div>

          <div className="stat">
            <div className="stat-title text-xs">Time</div>
            <div className="stat-value text-2xl">{activity.movingTimeFormatted}</div>
          </div>
        </div>


        <div className="card-actions justify-end">
          <a className="btn btn-secondary" href={`https://www.strava.com/activities/${activity.id}`} target="_blank">
            More Info
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
