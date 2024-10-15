import { readFileSync } from "fs";
import { JustGivingFundraisingPage, justGivingFundraisingPageSchema } from "./types/JustGivingFundraisingPage";

export async function getFundraisingPage(): Promise<JustGivingFundraisingPage> {
  try {
    const fundraisingPageJson = JSON.parse(readFileSync(`${process.cwd()}/app/justGiving/mockFundraisingPage.json`, 'utf8'));

    return justGivingFundraisingPageSchema.parse(fundraisingPageJson)
  } catch {
    throw new Error('getFundraisingPage-error')
  }
}
