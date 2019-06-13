/*
 * @Author: Caven
 * @Date: 2019-06-13 11:08:30
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-13 14:36:53
 */
const URL = 'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options.url = URL
    super(options)
  }
}
export default AmapImageryProvider
