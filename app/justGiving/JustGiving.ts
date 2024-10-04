import { getRecentDonations } from "./getRecentDonations";
import { JustGivingDonation } from "./types/JustGivingDonation";

export class JustGiving {
  static donations: JustGivingDonation[]

  static async load() {
    this.donations = await getRecentDonations();
  }
}
