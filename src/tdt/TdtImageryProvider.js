/*
 * @Author: Caven
 * @Date: 2019-06-13 13:20:09
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-13 13:58:22
 */

class TdtImageryProvider extends Cesium.WebMapTileServiceImageryProvider {
  constructor(options = {}) {
    let url =
      'http://t{s}.tianditu.gov.cn/{layer}_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer={layer}&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles&tk={key}'
    super({
      url: url.replace(/\{layer\}/g, options.layer || 'vec').replace(/\{key\}/g, options.key || ''),
      style: 'default',
      format: 'tiles',
      tileMatrixSetID: 'c',
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      tileMatrixLabels: [...Array(18).keys()].map(item => (item + 1).toString()),
      tilingScheme: new Cesium.GeographicTilingScheme(),
      maximumLevel: 18
    })
  }
}

export default TdtImageryProvider
