import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { z } from 'zod'

dayjs.extend(calendar);

/** https://developers.strava.com/docs/reference/#api-models-SummaryActivity */
export const stravaActivitySchema = z
  .object({
    id: z.number(),
    name: z.string(),
    start_date: z.string().datetime(),
    start_date_local: z.string().datetime()
  })
  .transform(activity => {
    return {
      id: activity.id,
      name: activity.name,
      // date: activity.start_date,
      date: dayjs(activity.start_date).calendar(null, {
        sameElse: "DD/MM/YYYY [at] h:mm A", // Everything else ( 17/10/2011 )
      })
    }
  })

export type StravaActivity = z.infer<typeof stravaActivitySchema>
