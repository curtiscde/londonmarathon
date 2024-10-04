import { StravaActivity } from "../stravaActivities";

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
          {activity.date}
        </h6>

        <div className="stats shadow w-full mb-8">
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
          <a className="btn btn-secondary" href={`https://www.strava.com/activities/${activity.id}`} target="_blank">More Info</a>
        </div>
      </div>
    </div>
  );
}
