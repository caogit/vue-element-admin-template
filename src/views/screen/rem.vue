<template>
  <div class="screen-root">
    <div id="screen" class="screen">
      打开控制台手机，选择尺寸自适应查看变化
    </div>
  </div>
</template>

<script>
export default {
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
      background-color:black;
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
</style>
