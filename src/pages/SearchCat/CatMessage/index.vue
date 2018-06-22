<template>
    <div class="search-cat">
      <div class="slider-item">
        <swiper indicator-dots="false"
                :autoplay="false" :interval="5000" :duration="1000" indicator-color="rgba(255,255,255,0.8)" indicator-active-color="#fff" >
          <div v-for="(item, key) in imgUrls" class="img-item">
            <swiper-item>
              <img :src="item" class="slide-image"/>
            </swiper-item>
          </div>
        </swiper>
      </div>
      <div class="search-name">
        <label for="">名字</label>
        <p>费尔奇 （取自frontcp）</p>
      </div>
      <div class="search-name">
        <label for="">特征</label>
        <p>这只猫的眼神彷佛再说，“嗨，美女，早上好！”</p>
      </div>
      <button class="btn-follow">关注它</button>
      <button class="btn-search">找它去</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        '../../../static/img/timeline/day1-1.jpg',
        '../../../static/img/timeline/day1-1.jpg'
      ]
    }
  },
  methods: {
    // 跳转页面
    navigateTo (url) {
      wx.navigateTo({
        url: url
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../../static/font/iconfont.css'
  .search-cat
    font-size: 14px
    width: 100%
    height: 100vh
    .slider-item
      width: 100%
      padding: 10px 0
      swiper
        width: 355px
        height: 240px
        margin: auto
        img
          width: 100%
          height: 100%
    .search-name
      float: left
      width: 100%
      padding: 5px 10px
      label
        float: left
        font-weight: bold
        width: 15%
      p
        float: left
        width: 70%
    .btn-follow
      color: #fff
      width: 95%
      background-color: #cd9057
    .btn-search
      margin-top: 10px
      color: #fff
      width: 95%
      background-color: #632307

</style>
