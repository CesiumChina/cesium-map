/*
 * @Author: Caven
 * @Date: 2019-06-13 13:05:10
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-13 13:58:26
 */

const URL = 'https://rt0.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=1000&scene=0&version=347'

class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options.url = URL
    super(options)
  }
}

export default TencentImageryProvider
