<template>
  <div class="hotCard">
    <img :src="src" alt="">
    <div class="content">
      <p>{{name}}</p>
      <p>{{date}}</p>
      <p>{{host}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '1'
    },
    date: {
      type: String,
      default: '2'
    },
    host: {
      type: String,
      default: '3'
    }
  }
}
</script>

<style lang="scss" scoped>
.hotCard {
  width: 100%;
  height: 500rpx;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .content {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
