import { getDistanceBetweenCoords } from './getDistanceBetweenCoords';

describe('getDistanceBetweenCoords', () => {
  it('returns distance', () => {
    expect(
      getDistanceBetweenCoords(
        {
          lat: 51.473090000000006,
          lon: 0.011580000000000002,
        },
        {
          lat: 51.47325002033894,
          lon: 0.01284248675690911,
        },
      ),
    ).toEqual(0.08923339479248181);
  });
});
