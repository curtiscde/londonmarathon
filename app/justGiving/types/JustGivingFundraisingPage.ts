import { z } from 'zod';

export const justGivingFundraisingPageSchema = z
  .object({
    fundraisingTarget: z.string(),
    grandTotalRaisedExcludingGiftAid: z.string(),
    totalEstimatedGiftAid: z.string(),
    totalRaisedPercentageOfFundraisingTarget: z.string(),
  })
  .transform((fundraisingPage) => ({
    fundraisingTarget: Number(fundraisingPage.fundraisingTarget),
    totalRaised: Number(fundraisingPage.grandTotalRaisedExcludingGiftAid) + Number(fundraisingPage.totalEstimatedGiftAid),
    totalRaisedPercentageOfFundraisingTarget: fundraisingPage.totalRaisedPercentageOfFundraisingTarget,
  }));

export type JustGivingFundraisingPage = z.infer<typeof justGivingFundraisingPageSchema>;
