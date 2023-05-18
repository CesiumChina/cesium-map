/**
 * @Author: Caven
 * @Date: 2020-01-15 20:31:28
 */

import AmapMercatorTilingScheme from './AmapMercatorTilingScheme'
import { UrlTemplateImageryProvider } from 'cesium/Build/Cesium'

const TILE_URL = {
  img: '//webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
  elec: '//webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
  cva: '//webst{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
}

class AmapImageryProvider extends UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] =
      options.url ||
      [
        options.protocol || '',
        TILE_URL[options.style] || TILE_URL['elec'],
      ].join('')
    if (!options.subdomains || !options.subdomains.length) {
      options['subdomains'] = ['01', '02', '03', '04']
    }
    if (options.crs === 'WGS84') {
      options['tilingScheme'] = new AmapMercatorTilingScheme()
    }
    super(options)
  }
}
export default AmapImageryProvider
