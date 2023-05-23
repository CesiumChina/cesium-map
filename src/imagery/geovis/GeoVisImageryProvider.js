/**
 @author : Caven Chen
 @date : 2023-05-18
 */

import { UrlTemplateImageryProvider } from '@cesium/engine'

const TILE_URL =
  '//tiles{s}.geovisearth.com/base/v1/{style}/{z}/{x}/{y}?format={format}&tmsIds=w&token={key}'

class GeoVisImageryProvider extends UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] =
      options.url ||
      [
        options.protocol || '',
        TILE_URL.replace(/\{style\}/g, options.style || 'vec')
          .replace(/\{format\}/g, options.format || 'png')
          .replace(/\{key\}/g, options.key || ''),
      ].join('')
    options['subdomains'] = options.subdomains || ['1', '2', '3']
    super(options)
  }
}

export default GeoVisImageryProvider
