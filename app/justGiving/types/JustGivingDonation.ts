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
    const date = new Date(Number(donation.donationDate.match(/Date\((\d+)\+\d+\)/)![1]))
    return {
      amount: Number(donation.amount),
      id: donation.id,
      displayAmount: donation.amount,
      donorDisplayName: donation.donorDisplayName,
      donationDate: date.toUTCString(),
      donationDateTimestamp: date.getTime(),
      message: donation.message
    }
  })

export type JustGivingDonation = z.infer<typeof justGivingDonationSchema>
