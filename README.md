# cesium-map

<p>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/github/package-json/v/Digital-Visual/cesium-map?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@dvgis/cesium-map?logo=npm"/>
</p>

> Cesium 地图插件，方便接入国内地图

```warning
 使用前引入 Cesium 框架
```

## BaiduImageryProvider

> 百度地图

```js
var options = {
  style: 'normal' // 样式参数
}
viewer.imageryLayers.addImageryProvider(
  new Cesium.BaiduImageryProvider(options)
)
```

## TencentImageryProvider

> 腾讯地图

```js
viewer.imageryLayers.addImageryProvider(new Cesium.TencentImageryProvider())
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
  style: 'img'
}
viewer.imageryLayers.addImageryProvider(new Cesium.AmapImageryProvider(options))
```

## GoogleImageryProvider

> 谷歌地图

```js
var options = {
  style: 'img' //影像地图
}
viewer.imageryLayers.addImageryProvider(
  new Cesium.GoogleImageryProvider(options)
)
```
