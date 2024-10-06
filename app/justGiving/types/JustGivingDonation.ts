import { z } from "zod";

export const justGivingDonationSchema = z
  .object({
    amount: z.string(),
    id: z.number(),
    donorDisplayName: z.string(),
    donationDate: z.string(),
    message: z.string(),
  })
  .transform((donation) => {
    return {
      amount: donation.amount,
      id: donation.id,
      donorDisplayName: donation.donorDisplayName,
      donationDate: new Date(Number(donation.donationDate.match(/Date\((\d+)\+\d+\)/)![1])).toUTCString(),
      message: donation.message
    }
  })

export type JustGivingDonation = z.infer<typeof justGivingDonationSchema>
