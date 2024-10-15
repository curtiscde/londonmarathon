import { StravaAthlete, stravaAthleteSchema } from "./types/StravaAthlete";

export async function getAthlete(accessToken: string): Promise<StravaAthlete> {
  try {
    const apiResponse = await fetch('https://www.strava.com/api/v3/athlete', {
      cache: 'no-store',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((res) => res.json())
    return stravaAthleteSchema.parse(apiResponse)
  } catch (e) {
    console.log(e)
    throw new Error('getAthlete-error')
  }
}
