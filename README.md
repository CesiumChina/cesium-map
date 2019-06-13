# cesium-map

cesium-map

> 使用前引入 Cesium 框架

## BaiduImageryProvider

> 百度地图

```js
var options = {
  style: 'normal'
}
viewer.imageryLayers.addImageryProvider(new Cesium.BaiduImageryProvider(options))
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
  layer: 'vec',
  key: ''
}
viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(options))
```

## GoogleImageryProvider

> 谷歌地图

```js
var options = {
  style: 'sl' //矢量地图
}
viewer.imageryLayers.addImageryProvider(new Cesium.GoogleImageryProvider(options))
```
