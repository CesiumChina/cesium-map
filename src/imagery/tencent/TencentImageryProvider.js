/**
 * @Author: Caven
 * @Date: 2020-01-21 16:10:47
 */

const IMG_URL =
  'https://p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=400'

const ELEC_URL =
  'https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid={style}&scene=0&version=347'

class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    let url = options.style === 'img' ? IMG_URL : ELEC_URL
    options['url'] = url.replace('{style}', options.style || 1)
    if (!options.subdomains || !options.subdomains.length) {
      options['subdomains'] = ['0', '1', '2']
    }
    if (options.style === 'img') {
      options['customTags'] = {
        sx: (imageryProvider, x, y, level) => {
          return x >> 4
        },
        sy: (imageryProvider, x, y, level) => {
          return ((1 << level) - y) >> 4
        }
      }
    }
    super(options)
  }
}

export default TencentImageryProvider
