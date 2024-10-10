import { RouteCoord } from "./types/RouteCoord";
import { coords } from "./lmCoords.json"

export class DonationsMap {
  public static routeCoords: RouteCoord[]

  public static getRouteCoords() {
    this.routeCoords = coords
  }
}