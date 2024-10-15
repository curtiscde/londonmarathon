import { getAthlete } from "./getAthlete"
import { getAuthData } from "./getAuthData"
import { getRecentActivities } from "./getRecentActivities"
import { StravaActivity } from "./types/StravaActivity"
import { StravaAthlete } from "./types/StravaAthlete"

export class Strava {
  static athlete: StravaAthlete
  static activities: StravaActivity[]
  static profileUrl: string

  static async load(stravaRefreshToken: string) {
    const { access_token: accessToken } = await getAuthData(stravaRefreshToken)
    this.athlete = await getAthlete(accessToken)
    this.activities = await getRecentActivities(accessToken)

    this.profileUrl = `https://www.strava.com/athletes/${this.athlete.id}`
  }
}
