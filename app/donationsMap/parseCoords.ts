import { z } from 'zod';

const coordsSchema = z.array(
  z.object({
    lat: z.string(),
    lon: z.string(),
  }),
);

const coordsSchemaWithTransform = coordsSchema.transform((coords) => coords.map(({ lat, lon }) => ({
  lat: Number(lat),
  lon: Number(lon),
})));

export const parseCoords = (coords: z.infer<typeof coordsSchema>) => coordsSchemaWithTransform
  .parse(coords);
