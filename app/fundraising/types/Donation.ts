import { RouteCoord } from '@/app/types/RouteCoord';

interface DonationMap {
  coords: RouteCoord[]
  donationDistance: number
  donationDistanceDisplay: string
}

export interface Donation {
  amount: number
  id: number,
  displayAmount: string,
  donorDisplayName: string,
  donationDate: string,
  donationDateTimestamp: number,
  message: string
  donationMap?: DonationMap
}
