import { getTotalDistance } from "./getTotalDistance"
import { coords } from './lmCoords.json'

describe('getTotalDistance', () => {
  it('returns total distance', () => {
    expect(
      getTotalDistance(coords)
    ).toEqual(0.5396484825457607)
  })
})
