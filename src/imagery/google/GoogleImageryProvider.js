/**
 * @Author: Caven
 * @Date: 2020-01-21 16:06:14
 */

import { UrlTemplateImageryProvider } from '@cesium/engine'
import GCJ02TilingScheme from '../tiling-scheme/GCJ02TilingScheme'

const TILE_URL = {
  img: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
  elec: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=m&x={x}&y={y}&z={z}',
  cva: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h&x={x}&y={y}&z={z}',
  ter: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=t@131,r&x={x}&y={y}&z={z}',
  img_cva: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=y&x={x}&y={y}&z={z}',
}

class GoogleImageryProvider extends UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] =
      options.url ||
      [
        options.protocol || '',
        TILE_URL[options.style] || TILE_URL['elec'],
      ].join('')
    if (options.crs === 'WGS84') {
      options['tilingScheme'] = new GCJ02TilingScheme()
    }
    super(options)
  }
}

export default GoogleImageryProvider
