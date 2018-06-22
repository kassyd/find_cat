<template>
    <div class="time-card">
      <div class="img-card" v-for="item in imgList" :key="item.catName">
        <div class="cards">
          <h6>{{item.catName}}</h6>
          <p>{{item.time}}</p>
          <p>{{item.catHost}}</p>
        </div>
        <img :src="item.img" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          catName: '咖啡猫',
          time: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day3-2.jpg'
        },
        {
          catName: '咖啡猫',
          time: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day3-2.jpg'
        },
        {
          catName: '咖啡猫',
          time: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day3-2.jpg'
        }
      ]
    }
  },
  methods: {
    // 跳转页面
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../static/font/iconfont.css'
  .time-card
    width: 100%
    .img-card
      padding: 20px
      width: 90%
      height: 240px
      position: relative
      .cards
        position: absolute
        top: 120px
        left: 150px
        color: #fff
        h6
          text-align: center
        p
          text-align: center
          font-size: 10px
      img
        width: 335px
        height: 240px

  </style>
