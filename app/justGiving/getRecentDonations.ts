import { readFileSync } from "fs";
import { JustGivingDonation, justGivingDonationSchema } from "./types/JustGivingDonation";
import { z } from "zod";

export async function getRecentDonations(): Promise<JustGivingDonation[]> {
  try {
    const donationsSchema = z.array(justGivingDonationSchema)
    const donationsJson = JSON.parse(readFileSync(`${process.cwd()}/app/justGiving/mockDonations.json`, 'utf8'));

    return donationsSchema.parse(donationsJson.donations)
  } catch {
    throw new Error('getRecentDonations-error')
  }
}
