import { DonationsMap } from '../donationsMap';
import { generateDonationCoords, GenerateDonationCoordsResponse } from './generateDonationCoords';

describe('generateDonationCoords', () => {
  let response: GenerateDonationCoordsResponse;

  beforeAll(() => {
    DonationsMap.getRouteCoords();
    const { routeCoords } = DonationsMap;

    response = generateDonationCoords({
      donationDistance: 0.2,
      remainingRouteCoords: routeCoords,
    });
  });

  it('generates coords for donation', () => {
    expect(response.donationCoords).toEqual([
      {
        lat: 51.473090000000006,
        lon: 0.011580000000000002,
      },
      {
        lat: 51.47325002033894,
        lon: 0.01284248675690911,
      },
      {
        lat: 51.47341002712218,
        lon: 0.014104982370502563,
      },
      {
        lat: 51.473552794510425,
        lon: 0.01523155796816841,
      },
    ]);
  });
});
