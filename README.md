# cesium-map

<p>
<img src="https://img.shields.io/github/actions/workflow/status/dvgis/cesium-map/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/npm/v/@dvgis/cesium-map?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@dvgis/cesium-map?logo=npm"/>
</p>

> Cesium 地图插件，用于添加国内各大地图厂商的地图

```warning
 使用前引入 Cesium 框架,由于Cesium放弃了ImageryProvider部分属性,建议使用`viewer.imageryLayers.add`添加地图
```

## 安装

`NPM / YARN`

```shell
npm install @dvgis/cesium-map
-----------------------------
yarn add @dvgis/cesium-map
```

```js
import { AmapImageryProvider,BaiduImageryProvider, GeoVisImageryProvider }  from '@dvgis/cesium-map'
```

`CDN`

```html
<script src="https://cdn.jsdelivr.net/npm/@dvgis/cesium-map/dist/cesium.map.min.js"></script>
```

## AmapImageryProvider

> 高德地图

```js
var options = {
  style: 'img', // style: img、elec、cva
  crs: 'WGS84' // 使用84坐标系，默认为：GCJ02
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new AmapImageryProvider(options)))
```

## BaiduImageryProvider

> 百度地图

```js
var options = {
  style: 'normal', // style: img、vec、normal、dark
  crs: 'WGS84' // 使用84坐标系，默认为：BD09
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new BaiduImageryProvider(options)))
```

## GeoVisImageryProvider

> 星图地图

```js
var options = {
  style: 'vec', //style: img、vec、ter, cia,cat,
  key:'', // 需去相关地图厂商申请
  format:'png' //format:png、webp(用于style为img)
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new GeoVisImageryProvider(options)))
```

## GoogleImageryProvider

> 谷歌地图(已被墙)

```js
var options = {
  style: 'img' //style: img、elec、ter
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new GoogleImageryProvider(options)))
```

## TdtImageryProvider

> 天地图

```js
var options = {
  style: 'vec', //style: vec、cva、img、cia、ter 
  key:'', // 需去相关地图厂商申请
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new TdtImageryProvider(options)))
```

## TencentImageryProvider

> 腾讯地图

```js
var options = {
  style: 1 //style: img、1：经典
}
viewer.imageryLayers.add(new Cesium.ImageryLayer( new TencentImageryProvider(options)))
```

## 示例

> http://dc.dvgis.cn
