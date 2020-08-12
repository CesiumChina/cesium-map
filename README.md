# cesium-map

<p>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/github/package-json/v/Digital-Visual/cesium-map?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@dvgis/cesium-map?logo=npm"/>
</p>

> Cesium 地图插件，用于添加国内各大地图厂商的地图

```warning
 使用前引入 Cesium 框架
```

## 安装

> CDN

```html
<script src="cesium-map/cesium.map.min.js"></script>
```

> NPM / YARN

```shell
   npm install @dvgis/cesium-map
   yarn add @dvgis/cesium-map
```

```js

require('@dvgis/cesium-map/build/cesium-map/cesium.map.min')  // 2.2.0 版本前

require('@dvgis/cesium-map/build/cesium.map.min') // 2.2.0 版本及以后

```

## BaiduImageryProvider

> 百度地图

```js
var options = {
  style: 'normal' // style: img、vec、normal、dark
}
viewer.imageryLayers.addImageryProvider(
  new Cesium.BaiduImageryProvider(options)
)
```

## TencentImageryProvider

> 腾讯地图

```js
var options = {
  style: 1 //样式参数 1：经典
}

viewer.imageryLayers.addImageryProvider(
  new Cesium.TencentImageryProvider(options)
)
```

## TdtImageryProvider

> 天地图

```js
var options = {
  style: 'vec',
  key: ''
}
viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(options))
```

## AmapImageryProvider

> 高德地图

```js
var options = {
  style: 'img' // style: img、elec
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
