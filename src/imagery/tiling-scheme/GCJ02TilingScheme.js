/**
 * @Author: Caven
 * @Date: 2021-01-31 22:07:05
 */

import {
  WebMercatorTilingScheme,
  WebMercatorProjection,
  Math as CesiumMath,
  Cartographic,
  Cartesian2,
} from '@cesium/engine'

import CoordTransform from '../../transform/CoordTransform'

class GCJ02TilingScheme extends WebMercatorTilingScheme {
  constructor(options) {
    super(options)
    let projection = new WebMercatorProjection()
    this._projection.project = function (cartographic, result) {
      result = CoordTransform.WGS84ToGCJ02(
        CesiumMath.toDegrees(cartographic.longitude),
        CesiumMath.toDegrees(cartographic.latitude)
      )
      result = projection.project(
        new Cartographic(
          CesiumMath.toRadians(result[0]),
          CesiumMath.toRadians(result[1])
        )
      )
      return new Cartesian2(result.x, result.y)
    }
    this._projection.unproject = function (cartesian, result) {
      let cartographic = projection.unproject(cartesian)
      result = CoordTransform.GCJ02ToWGS84(
        CesiumMath.toDegrees(cartographic.longitude),
        CesiumMath.toDegrees(cartographic.latitude)
      )
      return new Cartographic(
        CesiumMath.toRadians(result[0]),
        CesiumMath.toRadians(result[1])
      )
    }
  }
}

export default GCJ02TilingScheme
