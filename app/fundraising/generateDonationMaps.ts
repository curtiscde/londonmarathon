import { RouteCoord } from '../types/RouteCoord';
import { generateDonationCoords } from './generateDonationCoords';
import { Donation } from './types/Donation';

interface GenerateDonationMapsProps {
  donations: Donation[]
  fundraisingTarget: number
  routeCoords: RouteCoord[]
  totalRouteDistance: number
}

export const generateDonationMaps = ({
  donations, fundraisingTarget, totalRouteDistance, routeCoords,
}: GenerateDonationMapsProps): Donation[] => {
  let remainingRouteCoords = routeCoords;
  return donations.map((donation) => {
    const { amount } = donation;
    const amountRatio = (amount / fundraisingTarget);
    const donationDistance = totalRouteDistance * amountRatio;

    const donationDistanceDisplay = donationDistance > 1 ? `${donationDistance.toFixed(2)}km` : `${(donationDistance * 1000).toFixed(2)}m`;

    const { remainingRouteCoords: newRemainingRouteCoords, donationCoords } = generateDonationCoords({ remainingRouteCoords, donationDistance });
    remainingRouteCoords = [...newRemainingRouteCoords];

    return {
      ...donation,
      donationMap: {
        coords: donationCoords,
        donationDistance,
        donationDistanceDisplay,
      },
    };
  });
};
