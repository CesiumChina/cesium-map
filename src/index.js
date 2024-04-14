/**
 @author : Caven Chen
 @date : 2023-05-18
 */

import BaiduImageryProvider from './imagery/baidu/BaiduImageryProvider'
import AMapImageryProvider from './imagery/amap/AMapImageryProvider.js'
import TencentImageryProvider from './imagery/tencent/TencentImageryProvider'
import TdtImageryProvider from './imagery/tdt/TdtImageryProvider'
import GoogleImageryProvider from './imagery/google/GoogleImageryProvider'
import GeoVisImageryProvider from './imagery/geovis/GeoVisImageryProvider.js'
import CustomGeographicTilingScheme from './imagery/tiling-scheme/CustomGeographicTilingScheme.js'
import CustomMercatorTilingScheme from './imagery/tiling-scheme/CustomMercatorTilingScheme.js'

if (window && window.Cesium) {
  if (Object.isFrozen(window.Cesium)) {
    window.BaiduImageryProvider = BaiduImageryProvider
    window.AMapImageryProvider = AMapImageryProvider
    window.TencentImageryProvider = TencentImageryProvider
    window.TdtImageryProvider = TdtImageryProvider
    window.GoogleImageryProvider = GoogleImageryProvider
    window.GeoVisImageryProvider = GeoVisImageryProvider
    window.CustomGeographicTilingScheme = CustomGeographicTilingScheme
    window.CustomMercatorTilingScheme = CustomMercatorTilingScheme
  } else {
    window.Cesium.BaiduImageryProvider = BaiduImageryProvider
    window.Cesium.AMapImageryProvider = AMapImageryProvider
    window.Cesium.TencentImageryProvider = TencentImageryProvider
    window.Cesium.TdtImageryProvider = TdtImageryProvider
    window.Cesium.GoogleImageryProvider = GoogleImageryProvider
    window.Cesium.GeoVisImageryProvider = GeoVisImageryProvider
    window.Cesium.CustomGeographicTilingScheme = CustomGeographicTilingScheme
    window.Cesium.CustomMercatorTilingScheme = CustomMercatorTilingScheme
  }
}

export {
  BaiduImageryProvider,
  AMapImageryProvider,
  TencentImageryProvider,
  TdtImageryProvider,
  GoogleImageryProvider,
  GeoVisImageryProvider,
  CustomGeographicTilingScheme,
  CustomMercatorTilingScheme,
}
