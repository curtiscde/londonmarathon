import { getRecentActivities } from "./getRecentActivities"
import { StravaActivity } from "./types/StravaActivity"

export class StravaActivities {
  static activities: StravaActivity[]

  static async loadActivities(accessToken: string) {
    this.activities = await getRecentActivities(accessToken)
  }
}
