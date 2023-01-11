<template>
  <div id="container" class="gaodeMap" />
</template>

<script>
import AmapLoader from '@amap/amap-jsapi-loader'
export default {
  data() {
    return {
      AMap: null
    }
  },
  async mounted() {
    await this.initMap()
    this.complete()
    this.addMarker()
  },
  methods: {
    addMarker() {
      const marker = new this.AMap.Marker({
        position: [116.39, 39.9], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
      })
      this.map.add(marker)
    },
    complete() {
      this.map && this.map.on('complete', function() {
        console.log('加载完成')
      })
    },
    initMap() {
      return new Promise((resovle, reject) => {
        AmapLoader.load({
          key: '96d5d9c891391139036325b443b9303a',
          version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMaps) => {
          this.AMap = AMaps
          this.map = new AMaps.Map('container', { // 设置地图容器id
            // viewMode: '3D', // 是否为3D地图模式
            zoom: 5, // 初始化地图级别
            center: [105.602725, 37.076636] // 初始化地图中心点位置
          // mapStyle: 'amap://styles/03971487462316d5324b994beb181bd1' // 样式
          })
          resovle(true)
        }).catch(e => {
          console.log(e)
          reject(false)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gaodeMap{
  width: 500px;
  height: 500px;
}
</style>
