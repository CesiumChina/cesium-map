# cesium-map

<p>
<img src="https://img.shields.io/github/actions/workflow/status/cesium-china/cesium-map/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/npm/v/@cesium-china/cesium-map?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@cesium-china/cesium-map?logo=npm"/>
</p>

> Cesium 地图插件，用于添加国内各大地图厂商的地图

```warning
 使用前引入 Cesium 框架,由于Cesium放弃了ImageryProvider部分属性,建议使用`viewer.imageryLayers.add`添加地图
```

## 安装

`ESM`

```shell
npm install @cesium-china/cesium-map
-----------------------------
yarn add @cesium-china/cesium-map
```

```js
import { AMapImageryProvider,BaiduImageryProvider, GeoVisImageryProvider }  from '@cesium-china/cesium-map'
```

`CDN`

```html
<script src="https://cdn.jsdelivr.net/npm/@cesium-china/cesium-map/dist/cesium.map.min.js"></script>
```

## AMapImageryProvider

> 高德地图

```js
var options = {
  style: 'img', // style: img、elec、cva
  crs: 'WGS84' // 使用84坐标系，默认为：GCJ02
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.AMapImageryProvider(options)))
```

## BaiduImageryProvider

> 百度地图

```js 
var options = {
  style: 'normal', // style: img、vec、normal、dark
  crs: 'WGS84' // 使用84坐标系，默认为：BD09
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.BaiduImageryProvider(options)))
```

## GeoVisImageryProvider

> 星图地图

```js
var options = {
  style: 'vec', //style: img、vec、ter, cia,cat,
  key:'', // 需去相关地图厂商申请
  format:'png' //format:png、webp(用于style为img)
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.GeoVisImageryProvider(options)))
```

## GoogleImageryProvider

> 谷歌地图

```js
var options = {
  style: 'elec',//style: img、elec、ter,cva,img_cva
  crs: 'WGS84' // 使用84坐标系，默认为：GCJ02, img除外
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.GoogleImageryProvider(options)))
```

## TdtImageryProvider

> 天地图

```js
var options = {
  style: 'vec', //style: vec、cva、img、cia、ter 
  key:'', // 需去相关地图厂商申请
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.TdtImageryProvider(options)))
```

## TencentImageryProvider

> 腾讯地图

```js
var options = {
  style: 1,//style: img、1：经典
  crs: 'WGS84' // 使用84坐标系，默认为：GCJ02,
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new Cesium.TencentImageryProvider(options)))
```

### **_以下类用于自定义瓦片的加载，根据瓦片比例尺和切图原点重新计算瓦片行列号，可用于一些地方坐标系或者自定义切片方案的地图瓦片_**

## CustomGeographicTilingScheme

> 自定义地理平铺方案

根据瓦片的比例尺`(degrees/px)`和切图原点重新计算瓦片行列号,最终会采用`EPSG:4326`的瓦片计算规则平铺瓦片`(可能会存在偏移)`

```js
var options = {
  origin: [-180,90], //切图原点，默认为[-180,90]
  zoomOffset: 0, //瓦片的0级对应Cesium的瓦片层级，值为： 0 - Cesium层级，若瓦片的0级对应Cesium的10级，则值为 0 - 10 = -10，同时在瓦片请求时{z}的数值替换时也需加上这个层级偏移值
  tileSize: 256, //瓦片的大小，默认为256，即一张瓦片的大小为 256 * 256
  resolutions:[],//瓦片每一层级分辨率
  ellipsoid:Cesium.Ellipsoid.WGS84,// 平铺的椭球体,默认为 WGS84 椭球
  rectangle:Cesium.Rectangle.MAX_VALUE,//平铺方案覆盖的矩形（以弧度表示）
}
viewer.imageryLayers.add(new Cesium.ImageryLayer(
  new Cesium.TileCoordinatesImageryProvider({
    tilingScheme: new Cesium.CustomGeographicTilingScheme(options),
  })
))
```


## CustomMercatorTilingScheme

> 自定义墨卡托平铺方案

根据瓦片的比例尺`(meters/px)`和切图原点重新计算瓦片行列号,最终会采用`EPSG:3857`的瓦片计算规则平铺瓦片`(可能会存在偏移)`

```js
var options = {
  origin: [-20037508.3427892, 20037508.3427892], //切图原点，默认为[-20037508.3427892, 20037508.3427892]
  zoomOffset: 0, //瓦片的0级对应Cesium的瓦片层级，值为： 0 - Cesium层级，若瓦片的0级对应Cesium的10级，则值为 0 - 10 = -10，同时在瓦片请求时{z}的数值替换时也需加上这个层级偏移值
  tileSize: 256, //瓦片的大小，默认为256，即一张瓦片的大小为 256 * 256
  resolutions:[],//瓦片每一层级分辨率
  ellipsoid:Cesium.Ellipsoid.WGS84,// 平铺的椭球体,默认为 WGS84 椭球
  rectangleSouthwestInMeters: null,//切片方案覆盖的矩形的西南角，以米为单位。如果不指定该参数或矩形NortheastInMeters，则在经度方向上覆盖整个地球，在纬度方向上覆盖等距离，形成正方形投影
  rectangleNortheastInMeters: null,//切片方案覆盖的矩形的东北角（以米为单位）。如果未指定此参数或矩形SouthwestInMeters，则在经度方向上覆盖整个地球，并在纬度方向上覆盖相等的距离，从而形成方形投影。
}
viewer.imageryLayers.add(new Cesium.ImageryLayer(
  new Cesium.TileCoordinatesImageryProvider({
    tilingScheme: new Cesium.CustomMercatorTilingScheme(options),
  })
))
```


## 示例

> examples目录下提供了CND和ESM的两种使用方式
