/**
 @author : Caven Chen
 @date : 2023-05-18
 */

import {
  AMapImageryProvider,
  BaiduImageryProvider,
  GeoVisImageryProvider,
  GoogleImageryProvider,
  TdtImageryProvider,
  TencentImageryProvider,
  CustomGeographicTilingScheme,
  CustomMercatorTilingScheme,
} from './modules'

if (window && window.Cesium) {
  if (Object.isFrozen(window.Cesium)) {
    window.AMapImageryProvider = AMapImageryProvider
    window.BaiduImageryProvider = BaiduImageryProvider
    window.GeoVisImageryProvider = GeoVisImageryProvider
    window.GoogleImageryProvider = GoogleImageryProvider
    window.TdtImageryProvider = TdtImageryProvider
    window.TencentImageryProvider = TencentImageryProvider
    window.CustomGeographicTilingScheme = CustomGeographicTilingScheme
    window.CustomMercatorTilingScheme = CustomMercatorTilingScheme
  } else {
    window.Cesium.AMapImageryProvider = AMapImageryProvider
    window.Cesium.BaiduImageryProvider = BaiduImageryProvider
    window.Cesium.GeoVisImageryProvider = GeoVisImageryProvider
    window.Cesium.GoogleImageryProvider = GoogleImageryProvider
    window.Cesium.TdtImageryProvider = TdtImageryProvider
    window.Cesium.TencentImageryProvider = TencentImageryProvider
    window.Cesium.CustomGeographicTilingScheme = CustomGeographicTilingScheme
    window.Cesium.CustomMercatorTilingScheme = CustomMercatorTilingScheme
  }
}

export {
  AMapImageryProvider,
  BaiduImageryProvider,
  GeoVisImageryProvider,
  GoogleImageryProvider,
  TdtImageryProvider,
  TencentImageryProvider,
  CustomGeographicTilingScheme,
  CustomMercatorTilingScheme,
}
