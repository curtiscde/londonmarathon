import { readFileSync } from 'fs';
import { z } from 'zod';
import { JustGivingDonation, justGivingDonationSchema } from './types/JustGivingDonation';

export async function getRecentDonations(): Promise<JustGivingDonation[]> {
  try {
    const donationsSchema = z.array(justGivingDonationSchema);
    const donationsJson = JSON.parse(readFileSync(`${process.cwd()}/app/justGiving/mockDonations.json`, 'utf8'));

    return donationsSchema.parse(donationsJson.donations);
  } catch {
    throw new Error('getRecentDonations-error');
  }
}
