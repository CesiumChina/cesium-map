# cesium-map

<p>
<img src="https://img.shields.io/github/workflow/status/dvgis/cesium-map/build"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/npm/v/@dvgis/cesium-map?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dt/@dvgis/cesium-map?logo=npm"/>
</p>

> Cesium 地图插件，用于添加国内各大地图厂商的地图

```warning
 使用前引入 Cesium 框架
```

## 安装

`NPM / YARN`

```shell
npm install @dvgis/cesium-map
-----------------------------
yarn add @dvgis/cesium-map
```

```js
require('@dvgis/cesium-map')
```

`CDN`

```html
<script src="https://cdn.jsdelivr.net/npm/@dvgis/cesium-map"></script>
```


## BaiduImageryProvider

> 百度地图

```js
var options = {
  style: 'normal', // style: img、vec、normal、dark
  crs: 'WGS84' // 使用84坐标系，默认为：BD09
}
viewer.imageryLayers.addImageryProvider(
  new Cesium.BaiduImageryProvider(options)
)
```

## TencentImageryProvider

> 腾讯地图

```js
var options = {
  style: 1 //style: img、1：经典
}

viewer.imageryLayers.addImageryProvider(
  new Cesium.TencentImageryProvider(options)
)
```

## TdtImageryProvider

> 天地图

```js
var options = {
  style: 'vec', //style: vec、cva、img、cia、ter 
  key: ''
}
viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(options))
```

## AmapImageryProvider

> 高德地图

```js
var options = {
  style: 'img', // style: img、elec、cva
  crs: 'WGS84' // 使用84坐标系，默认为：GCJ02
}
viewer.imageryLayers.addImageryProvider(new Cesium.AmapImageryProvider(options))
```

## GoogleImageryProvider

> 谷歌地图

```js
var options = {
  style: 'img' //style: img、elec、ter
}
viewer.imageryLayers.addImageryProvider(
  new Cesium.GoogleImageryProvider(options)
)
```

## 示例

> http://dc.dvgis.cn
