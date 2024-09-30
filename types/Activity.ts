import { z } from 'zod'

export const activitySchema = z.object({
  id: z.number(),
  name: z.string()
})

export type Activity = z.infer<typeof activitySchema>
