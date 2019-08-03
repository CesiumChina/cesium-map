/*
 * @Author: Caven
 * @Date: 2019-06-13 13:36:42
 * @Last Modified by: Caven
 * @Last Modified time: 2019-08-03 15:43:27
 */

const ELEC_URL = 'http://mt1.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile'
const IMG_URL = 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
const TER_URL = 'http://mt1.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galile'

class GoogleImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] = options.style === 'img' ? IMG_URL : options.style === 'ter' ? TER_URL : ELEC_URL
    super(options)
  }
}

export default GoogleImageryProvider
