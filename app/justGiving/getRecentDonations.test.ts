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
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
      {
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
      {
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
      {
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
      {
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
      {
        amount: "2.00",
        donationDate: "Fri, 04 Oct 2024 17:37:36 GMT",
        donationDateTimestamp: 1728063456787,
        donorDisplayName: "display-name",
        id: 1,
        message: "message"
      },
    ])
  })
})