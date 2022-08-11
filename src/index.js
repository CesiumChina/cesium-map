/**
 * @Author: Caven
 * @Date: 2021-01-16 12:14:05
 */

import BaiduImageryProvider from './imagery/baidu/BaiduImageryProvider'
import AmapImageryProvider from './imagery/amap/AmapImageryProvider'
import TencentImageryProvider from './imagery/tencent/TencentImageryProvider'
import TdtImageryProvider from './imagery/tdt/TdtImageryProvider'
import GoogleImageryProvider from './imagery/google/GoogleImageryProvider'

Cesium.AmapImageryProvider = AmapImageryProvider
Cesium.BaiduImageryProvider = BaiduImageryProvider
Cesium.TencentImageryProvider = TencentImageryProvider
Cesium.TdtImageryProvider = TdtImageryProvider
Cesium.GoogleImageryProvider = GoogleImageryProvider
