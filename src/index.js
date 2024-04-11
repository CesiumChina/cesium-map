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

if (Cesium) {
  Cesium.BaiduImageryProvider = BaiduImageryProvider
  Cesium.AMapImageryProvider = AMapImageryProvider
  Cesium.TencentImageryProvider = TencentImageryProvider
  Cesium.TdtImageryProvider = TdtImageryProvider
  Cesium.GoogleImageryProvider = GoogleImageryProvider
  Cesium.GeoVisImageryProvider = GeoVisImageryProvider
  Cesium.CustomGeographicTilingScheme = CustomGeographicTilingScheme
  Cesium.CustomMercatorTilingScheme = CustomMercatorTilingScheme
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
