/*
 * @Author: Caven
 * @Date: 2019-06-13 13:36:42
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-22 10:58:10
 */

const YX_URL = 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
const SL_URL = 'http://mt1.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile'

class GoogleImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    super({
      url: options.style === 'yx' ? YX_URL : SL_URL
    })
  }
}

export default GoogleImageryProvider
