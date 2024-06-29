/**
 * @Author: Caven Chen
 * @Date: 2020-01-15
 */

import { UrlTemplateImageryProvider } from 'cesium'
import GCJ02TilingScheme from '../tiling-scheme/GCJ02TilingScheme.js'

const TILE_URL = {
  img: '//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=400',
  elec: '//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid={style}&scene=0&version=347',
}

class TencentImageryProvider extends UrlTemplateImageryProvider {
  constructor(options = {}) {
    let url =
      options.url ||
      [
        options.protocol || '',
        TILE_URL[options.style] || TILE_URL['elec'],
      ].join('')
    options['url'] = url.replace('{style}', options.style || '1')

    if (!options.subdomains || !options.subdomains.length) {
      options['subdomains'] = ['0', '1', '2']
    }

    if (options.style === 'img') {
      options['customTags'] = {
        sx: (imageryProvider, x, y, level) => {
          return x >> 4
        },
        sy: (imageryProvider, x, y, level) => {
          return ((1 << level) - 1 - y) >> 4
        },
      }
    }

    if (options.crs === 'WGS84') {
      options['tilingScheme'] = new GCJ02TilingScheme()
    }
    super(options)
  }
}

export default TencentImageryProvider
