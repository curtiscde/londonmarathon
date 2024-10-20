import { getRecentDonations } from './getRecentDonations';
import { JustGivingDonation } from './types/JustGivingDonation';

describe('getRecentDonations.ts', () => {
  let donations: JustGivingDonation[];

  beforeAll(async () => {
    donations = await getRecentDonations();
  });

  it('returns donations', () => {
    expect(donations).toEqual([
      {
        amount: 250,
        displayAmount: '250.00',
        donationDate: 'Fri, 04 Oct 2024 17:37:36 GMT',
        donationDateTimestamp: 1728063456787,
        donorDisplayName: 'display-name-1',
        id: 1,
        message: 'message',
      },
      {
        amount: 25,
        displayAmount: '25.00',
        donationDate: 'Mon, 07 Oct 2024 13:49:56 GMT',
        donationDateTimestamp: 1728308996987,
        donorDisplayName: 'display-name-2',
        id: 2,
        message: 'message',
      },
      {
        amount: 30,
        displayAmount: '30.00',
        donationDate: 'Tue, 08 Oct 2024 12:03:16 GMT',
        donationDateTimestamp: 1728388996987,
        donorDisplayName: 'display-name-3',
        id: 3,
        message: 'message',
      },
      {
        amount: 50,
        displayAmount: '50.00',
        donationDate: 'Fri, 11 Oct 2024 20:36:36 GMT',
        donationDateTimestamp: 1728678996987,
        donorDisplayName: 'display-name-4',
        id: 4,
        message: 'message',
      },
      {
        amount: 10,
        displayAmount: '10.00',
        donationDate: 'Sun, 13 Oct 2024 00:23:16 GMT',
        donationDateTimestamp: 1728778996987,
        donorDisplayName: 'display-name-5',
        id: 5,
        message: 'message',
      },
      {
        amount: 35,
        displayAmount: '35.00',
        donationDate: 'Wed, 16 Oct 2024 20:57:20 GMT',
        donationDateTimestamp: 1729112240471,
        donorDisplayName: 'display-name-6',
        id: 6,
        message: 'message',
      },
    ]);
  });
});
