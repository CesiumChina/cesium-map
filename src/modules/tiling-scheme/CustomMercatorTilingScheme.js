/**
 * @Author: Caven Chen
 * @Date: 2020-01-15
 */

import { WebMercatorTilingScheme, Cartesian2, Rectangle, defined } from 'cesium'

class CustomMercatorTilingScheme extends WebMercatorTilingScheme {
  constructor(options = {}) {
    super(options)
    this._origin = options.origin || [-20037508.3427892, 20037508.3427892]
    this._zoomOffset = options.zoomOffset || 0
    this._tileSize = options.tileSize || 256
    this._resolutions = options.resolutions || []
  }

  get zoomOffset() {
    return this._zoomOffset
  }

  tileXYToNativeRectangle(x, y, level, result) {
    if (!this._resolutions || !this._resolutions[level + this._zoomOffset]) {
      return Rectangle.MAX_VALUE
    }

    if (x < 0 || y < 0) {
      return Rectangle.MAX_VALUE
    }
    const tileRes = this._resolutions[level + this._zoomOffset] * this._tileSize
    let west = this._origin[0] + x * tileRes
    let south = this._origin[1] - (y + 1) * tileRes
    let east = this._origin[0] + (x + 1) * tileRes
    let north = this._origin[1] - y * tileRes

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
    const rectangle = this._rectangle
    if (!Rectangle.contains(rectangle, position)) {
      return undefined
    }
    if (!this._resolutions || !this._resolutions[level + this._zoomOffset]) {
      return new Cartesian2()
    }
    const tileRes = this._resolutions[level + this._zoomOffset] * this._tileSize
    const projection = this._projection
    const webMercatorPosition = projection.project(position)

    // Calculate the tile row and column numbers in the current coordinate system
    const xTileCoordinate = Math.floor(
      (webMercatorPosition.x - this._origin[0]) / tileRes
    )

    const yTileCoordinate = Math.floor(
      (this._origin[1] - webMercatorPosition.y) / tileRes
    )
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

export default CustomMercatorTilingScheme
