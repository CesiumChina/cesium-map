/*
 * @Author: Caven
 * @Date: 2019-06-13 10:56:27
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-08 21:22:13
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
