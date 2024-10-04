import { z } from "zod";

export const justGivingDonationSchema = z.object({
  id: z.number(),
  donorDisplayName: z.string(),
})

export type JustGivingDonation = z.infer<typeof justGivingDonationSchema>
