import { RouteCoord } from '../types/RouteCoord';
import { getTotalDistance } from './getTotalDistance';
import { coords } from './lmCoords.json';
import { parseCoords } from './parseCoords';

export class DonationsMap {
  public static routeCoords: RouteCoord[];

  public static getRouteCoords() {
    this.routeCoords = parseCoords(coords);
  }

  public static get totalRouteDistance() {
    return getTotalDistance(this.routeCoords);
  }
}
