import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { z } from 'zod'

dayjs.extend(calendar);

const formatDistance = (distance: number) => `${Math.round((distance / 1000) * 10) / 10}k`

const convertSecondsToHHMMSS = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m ${remainingSeconds}s`
}

/** https://developers.strava.com/docs/reference/#api-models-SummaryActivity */
export const stravaActivitySchema = z
  .object({
    id: z.number(),
    distance: z.number(),
    moving_time: z.number(),
    name: z.string(),
    start_date: z.string().datetime(),
    start_date_local: z.string().datetime()
  })
  .transform(activity => {
    return {
      id: activity.id,
      distance: activity.distance,
      distanceFormatted: formatDistance(activity.distance),
      movingTime: activity.moving_time,
      movingTimeFormatted: convertSecondsToHHMMSS(activity.moving_time),
      name: activity.name,
      // date: dayjs(activity.start_date).calendar(null, {
      //   sameElse: "DD/MM/YYYY [at] h:mm A"
      // })
      date: activity.start_date
    }
  })

export type StravaActivity = z.infer<typeof stravaActivitySchema>
