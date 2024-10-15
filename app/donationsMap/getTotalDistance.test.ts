import { getTotalDistance } from "./getTotalDistance"
import { coords } from './lmCoords.json'
import { parseCoords } from "./parseCoords"

describe('getTotalDistance', () => {
  it('returns total distance', () => {
    expect(
      getTotalDistance(
        parseCoords(coords)
      )
    ).toEqual(42.32318296847247)
  })
})
