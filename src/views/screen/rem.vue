<template>
  <div class="screen-root">
    <div id="screen" class="screen">
      <!-- 打开控制台手机，选择尺寸自适应查看变化 -->
      <v-chart class="chart" :option="option" :init-options="initOptions" autoresize />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initOptions: {
        renderer: 'svg'
      },
      option: {
        title: {
          text: 'Stacked Area Chart'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  mounted() {
    (function init(screenRatioByDesign = 16 / 9) {
      const docEle = document.documentElement
      function setHtmlFontSize() {
        var screenRatio = docEle.clientWidth / docEle.clientHeight
        var fontSize = (
          screenRatio > screenRatioByDesign
            ? (screenRatioByDesign / screenRatio)
            : 1
        ) * docEle.clientWidth / 10
        docEle.style.fontSize = fontSize.toFixed(3) + 'px'
        console.log(docEle.style.fontSize)
      }
      setHtmlFontSize()
      window.addEventListener('resize', setHtmlFontSize)
    })()
  }
}
</script>
<style lang="scss" scoped>
/*
  除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事
*/
.screen-root {
    height: 100%;
    width: 100%;
    background-image: url('./img/bigscreen.png');
    background-size: 100% 100%;
    position: relative;
    .screen {
      color: #fff;
      text-align: center;
      // background-color:black;
      font-size:.1563rem;
        width: 10rem;  //设计稿的宽度
        height: 5.625rem;  //设计稿的高度
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
.chart {
  width: 3.125rem;
  height: 2.0833rem;
}
</style>
