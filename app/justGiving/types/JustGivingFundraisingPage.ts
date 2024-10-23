import { z } from 'zod';

export const justGivingFundraisingPageSchema = z
  .object({
    fundraisingTarget: z.string(),
    grandTotalRaisedExcludingGiftAid: z.string(),
    totalEstimatedGiftAid: z.string(),
    totalRaisedPercentageOfFundraisingTarget: z.string(),
  })
  .transform(({
    fundraisingTarget,
    grandTotalRaisedExcludingGiftAid,
    totalEstimatedGiftAid,
    totalRaisedPercentageOfFundraisingTarget,
  }) => ({
    fundraisingTarget: Number(fundraisingTarget),
    totalRaised: Number(grandTotalRaisedExcludingGiftAid) + Number(totalEstimatedGiftAid),
    totalRaisedPercentageOfFundraisingTarget,
  }));

export type JustGivingFundraisingPage = z.infer<typeof justGivingFundraisingPageSchema>;
