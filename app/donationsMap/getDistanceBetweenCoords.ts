import { RouteCoord } from './types/RouteCoord';

export function getDistanceBetweenCoords(coord1: RouteCoord, coord2: RouteCoord) {
  const latDiff = Number(coord1.lat) - Number(coord2.lat);
  const lonDiff = Number(coord1.lon) - Number(coord2.lon);

  return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
}
