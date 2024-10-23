import { getDistanceBetweenCoords } from '../donationsMap/getDistanceBetweenCoords';
import { RouteCoord } from '../types/RouteCoord';

interface GenerateDonationCoordsProps {
  remainingRouteCoords: RouteCoord[]
  donationDistance: number
}

export interface GenerateDonationCoordsResponse {
  donationCoords: RouteCoord[]
  remainingRouteCoords: RouteCoord[]
}

export const generateDonationCoords = ({
  remainingRouteCoords: originalRemainingRouteCoords,
  donationDistance,
}: GenerateDonationCoordsProps): GenerateDonationCoordsResponse => {
  const donationCoords: RouteCoord[] = [];
  const remainingRouteCoords = [...originalRemainingRouteCoords];
  let donationDistanceLeft = donationDistance;

  donationCoords.push(remainingRouteCoords[0]);
  remainingRouteCoords.shift();

  while (donationDistanceLeft > 0) {
    const coordsA = donationCoords[donationCoords.length - 1];
    const coordsB = remainingRouteCoords[0];
    const distanceDifference = getDistanceBetweenCoords(coordsA, coordsB);

    if (distanceDifference < donationDistanceLeft) {
      donationCoords.push(coordsB);
      remainingRouteCoords.shift();
    } else {
      const ratioLeft = donationDistanceLeft / donationDistance;
      const newCoords: RouteCoord = {
        lat: coordsB.lat - ((coordsB.lat - coordsA.lat) * ratioLeft),
        lon: coordsB.lon - ((coordsB.lon - coordsA.lon) * ratioLeft),
      };

      remainingRouteCoords.splice(0, 0, newCoords);
      donationCoords.push(newCoords);
    }

    donationDistanceLeft -= distanceDifference;
  }

  return {
    donationCoords,
    remainingRouteCoords,
  };
};
