import { z } from 'zod';
import { StravaActivity, stravaActivitySchema } from './types/StravaActivity';

export async function getRecentActivities(accessToken: string): Promise<StravaActivity[]> {
  try {
    const activitiesSchema = z.array(stravaActivitySchema);
    const apiResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=6', {
      cache: 'no-store',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json());
    return activitiesSchema.parse(apiResponse);
  } catch (e) {
    throw new Error('getRecentActivities-error');
  }
}
