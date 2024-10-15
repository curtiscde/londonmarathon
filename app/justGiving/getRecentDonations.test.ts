import { getRecentDonations } from "./getRecentDonations"
import { JustGivingDonation } from "./types/JustGivingDonation";

describe('getRecentDonations.ts', () => {
  let donations: JustGivingDonation[]

  beforeAll(async () => {
    donations = await getRecentDonations();
  })

  it('returns donations', () => {
    expect(donations).toEqual([
      {
        amount: 250,
        displayAmount: '250.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-1",
        id: 1,
        message: "message"
      },
      {
        amount: 25,
        displayAmount: '25.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-2",
        id: 1,
        message: "message"
      },
      {
        amount: 30,
        displayAmount: '30.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-3",
        id: 1,
        message: "message"
      },
      {
        amount: 50,
        displayAmount: '50.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-4",
        id: 1,
        message: "message"
      },
      {
        amount: 10,
        displayAmount: '10.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-5",
        id: 1,
        message: "message"
      },
      {
        amount: 35,
        displayAmount: '35.00',
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name-6",
        id: 1,
        message: "message"
      },
    ])
  })
})