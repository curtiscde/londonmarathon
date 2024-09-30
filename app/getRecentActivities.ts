import { Activity, activitySchema } from "@/types/Activity";
import { z } from "zod";

const activitiesSchema = z.array(activitySchema)

export async function getRecentActivities(accessToken: string): Promise<Activity[]> {
  try {
    const apiResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=6', {
      cache: 'no-store',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((res) => res.json())
    return activitiesSchema.parse(apiResponse)
  } catch {
    throw new Error('getRecentActivities-error')
  }
}
