import { getFundraisingPage } from './getFundraisingPage';
import { getRecentDonations } from './getRecentDonations';
import { JustGivingDonation } from './types/JustGivingDonation';
import { JustGivingFundraisingPage } from './types/JustGivingFundraisingPage';

export class JustGiving {
  static fundraisingPage: JustGivingFundraisingPage;

  static donations: JustGivingDonation[];

  static async load() {
    this.fundraisingPage = await getFundraisingPage();
    this.donations = await getRecentDonations();
  }
}
