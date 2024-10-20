import { JustGiving } from "../justGiving";
import { RouteCoord } from "../types/RouteCoord";
import { generateDonationMaps } from "./generateDonationMaps";
import { Donation } from "./types/Donation";

interface FundraisingInfo {
  fundraisingTarget: number
  totalRaised: number
  totalRaisedPercentageOfFundraisingTarget: string
}

export class Fundraising {
  public static donations: Donation[]
  public static fundraisingInfo: FundraisingInfo

  static async loadDonations() {
    await JustGiving.load()

    const {
      donations,
      fundraisingPage: {
        fundraisingTarget,
        totalRaised,
        totalRaisedPercentageOfFundraisingTarget
      }
    } = JustGiving

    this.donations = donations.sort((a, b) => a.donationDateTimestamp < b.donationDateTimestamp ? -1 : 1)

    this.fundraisingInfo = {
      fundraisingTarget,
      totalRaised,
      totalRaisedPercentageOfFundraisingTarget
    }
  }

  static bindDonationMaps({ routeCoords, totalRouteDistance }: { routeCoords: RouteCoord[], totalRouteDistance: number }) {
    this.donations = generateDonationMaps({
      donations: this.donations,
      fundraisingTarget: this.fundraisingInfo.fundraisingTarget,
      totalRouteDistance,
      routeCoords
    })
  }
}
