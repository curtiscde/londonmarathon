import { z } from 'zod';

/** https://developers.strava.com/docs/reference/#api-Athletes-getLoggedInAthlete */
export const stravaAthleteSchema = z
  .object({
    id: z.number(),
  });

export type StravaAthlete = z.infer<typeof stravaAthleteSchema>;
