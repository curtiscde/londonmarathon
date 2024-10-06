import { z } from "zod";

export const justGivingDonationSchema = z
  .object({
    id: z.number(),
    donorDisplayName: z.string(),
    donationDate: z.string(),
  })
  .transform((donation) => {
    return {
      id: donation.id,
      donorDisplayName: donation.donorDisplayName,
      donationDate: new Date(Number(donation.donationDate.match(/Date\((\d+)\+\d+\)/)![1])).toUTCString()
    }
  })

export type JustGivingDonation = z.infer<typeof justGivingDonationSchema>
