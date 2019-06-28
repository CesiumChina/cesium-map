/*
 * @Author: Caven
 * @Date: 2019-06-13 11:08:30
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-24 16:11:17
 */
const URL = 'http://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options.url = URL
    super(options)
  }
}
export default AmapImageryProvider
