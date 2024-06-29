/**
 * @Author: Caven Chen
 * @Date: 2020-01-15
 */

import {
  GeographicTilingScheme,
  Math as CesiumMath,
  Cartesian2,
  Rectangle,
  defined,
} from 'cesium'

class CustomGeographicTilingScheme extends GeographicTilingScheme {
  constructor(options = {}) {
    super(options)
    this._origin = options.origin || [-180, 90]
    this._zoomOffset = options.zoomOffset || 0
    this._tileSize = options.tileSize || 256
    this._resolutions = options.resolutions || []
  }

  get zoomOffset() {
    return this._zoomOffset
  }

  tileXYToRectangle(x, y, level, result) {
    if (!this._resolutions || !this._resolutions[level + this._zoomOffset]) {
      return Rectangle.MAX_VALUE
    }

    const tileRes = this._resolutions[level + this._zoomOffset] * this._tileSize
    const west = CesiumMath.toRadians(this._origin[0] + x * tileRes)
    const south = CesiumMath.toRadians(this._origin[1] - (y + 1) * tileRes)
    const east = CesiumMath.toRadians(this._origin[0] + (x + 1) * tileRes)
    const north = CesiumMath.toRadians(this._origin[1] - y * tileRes)
    if (!defined(result)) {
      return new Rectangle(west, south, east, north)
    }
    result.west = west
    result.south = south
    result.east = east
    result.north = north
    return result
  }

  positionToTileXY(position, level, result) {
    if (!this._resolutions || !this._resolutions[level + this._zoomOffset]) {
      return new Cartesian2()
    }
    const tileRes = this._resolutions[level + this._zoomOffset] * this._tileSize
    const longitude = CesiumMath.toDegrees(position.longitude)
    const latitude = CesiumMath.toDegrees(position.latitude)
    // Calculate the tile row and column numbers in the current coordinate system
    const xTileCoordinate = Math.floor((longitude - this._origin[0]) / tileRes)
    const yTileCoordinate = Math.floor((this._origin[1] - latitude) / tileRes)
    if (!defined(result)) {
      return new Cartesian2(
        Math.max(0, xTileCoordinate),
        Math.max(0, yTileCoordinate)
      )
    }
    result.x = xTileCoordinate
    result.y = yTileCoordinate
    return result
  }
}

export default CustomGeographicTilingScheme
