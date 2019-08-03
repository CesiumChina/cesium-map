/*
 * @Author: Caven
 * @Date: 2019-06-13 11:07:07
 * @Last Modified by: Caven
 * @Last Modified time: 2019-08-03 15:44:20
 */
import BaiduImageryProvider from './baidu/BaiduImageryProvider'
import AmapImageryProvider from './amap/AmapImageryProvider'
import TencentImageryProvider from './tencent/TencentImageryProvider'
import TdtImageryProvider from './tdt/TdtImageryProvider'
import GoogleImageryProvider from './google/GoogleImageryProvider'
export function load() {
  Cesium.AmapImageryProvider = AmapImageryProvider
  Cesium.BaiduImageryProvider = BaiduImageryProvider
  Cesium.TencentImageryProvider = TencentImageryProvider
  Cesium.TdtImageryProvider = TdtImageryProvider
  Cesium.GoogleImageryProvider = GoogleImageryProvider
}
