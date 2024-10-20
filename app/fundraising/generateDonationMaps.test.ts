import { generateDonationMaps } from './generateDonationMaps';
import { Donation } from './types/Donation';

describe('generateDonationMaps', () => {
  // @ts-expect-error only providing relevant properties for test
  const donations: Donation[] = [{
    amount: 1,
  }];

  beforeAll(() => {
    // jest.mocked()
  });

  it('returns donations with donationMap', () => {
    expect(
      generateDonationMaps({
        donations, fundraisingTarget: 3000, totalRouteDistance: 5000, routeCoords: [{ lat: 0.5, lon: 0.5 }, { lat: 0.51, lon: 0.51 }, { lat: 0.91, lon: 0.952 }],
      }),
    ).toEqual([
      {
        amount: 1,
        donationMap: {
          coords: [
            {
              lat: 0.5,
              lon: 0.5,
            },
            {
              lat: 0.51,
              lon: 0.51,
            },
            {
              lat: 0.8874007661234086,
              lon: 0.9270278465663665,
            },
          ],
          donationDistance: 1.6666666666666665,
          donationDistanceDisplay: '1.67km',
        },
      },
    ]);
  });
});
