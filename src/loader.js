/*
 * @Author: Caven
 * @Date: 2019-06-13 11:07:07
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-22 10:31:49
 */
import BaiduImageryProvider from './map/baidu/BaiduImageryProvider'
import AmapImageryProvider from './map/amap/AmapImageryProvider'
import TencentImageryProvider from './map/tencent/TencentImageryProvider'
import TdtImageryProvider from './map/tdt/TdtImageryProvider'
import GoogleImageryProvider from './map/google/GoogleImageryProvider'
export function load() {
  Cesium.AmapImageryProvider = AmapImageryProvider
  Cesium.BaiduImageryProvider = BaiduImageryProvider
  Cesium.TencentImageryProvider = TencentImageryProvider
  Cesium.TdtImageryProvider = TdtImageryProvider
  Cesium.GoogleImageryProvider = GoogleImageryProvider
}
