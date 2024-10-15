import { getDistanceBetweenCoords } from './getDistanceBetweenCoords';
import { RouteCoord } from '../types/RouteCoord';

export function getTotalDistance(routeCoords: RouteCoord[]) {
  let totalDistance = 0;

  let previousCoords: RouteCoord;

  routeCoords.forEach(({ lat, lon }: RouteCoord) => {
    if (previousCoords) {
      totalDistance += getDistanceBetweenCoords({ lat, lon }, previousCoords);
    }

    previousCoords = { lat, lon };
  });

  return totalDistance;
}
