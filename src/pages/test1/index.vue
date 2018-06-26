<template>
    <div class="time-card">
      <div class="img-card" v-for="item in imgList" :key="item.catName">
        <hot-card :name="item.catName" :date="item.date" :host="item.catHost" :src="item.img"></hot-card>
      </div>
    </div>
</template>

<script>
import hotCard from '@/components/hotCard'
export default {
  components: {
    hotCard: hotCard
  },
  data () {
    return {
      imgList: [
        {
          catName: '咖啡猫',
          date: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day1-1.jpg'
        },
        {
          catName: '咖啡猫',
          date: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day1-2.png'
        },
        {
          catName: '咖啡猫',
          date: '2018.05.01',
          catHost: '果果',
          img: '../../../static/img/timeline/day1-3.jpg'
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
    overflow: hidden
    .img-card
      padding: 10px
      overflow: hidden
      width: 90%
      height: 240px
      margin: 0 auto;
      position: relative
  </style>
