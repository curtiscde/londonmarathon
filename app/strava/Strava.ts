import { getAthlete } from "./getAthlete"
import { getRecentActivities } from "./getRecentActivities"
import { StravaActivity } from "./types/StravaActivity"
import { StravaAthlete } from "./types/StravaAthlete"

export class Strava {
  static athlete: StravaAthlete
  static activities: StravaActivity[]
  static profileUrl: string

  static async load(accessToken: string) {
    this.athlete = await getAthlete(accessToken)
    this.activities = await getRecentActivities(accessToken)

    this.profileUrl = `https://www.strava.com/athletes/${this.athlete.id}`
  }
}
