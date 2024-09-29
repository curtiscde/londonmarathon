import { Activity } from "@/types/Activity";

export async function getRecentActivities(accessToken: string): Promise<Activity[]> {
  return fetch('https://www.strava.com/api/v3/athlete/activities?per_page=6', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((res: any) => res.json())
    .catch(e => console.log('err', e));
}
