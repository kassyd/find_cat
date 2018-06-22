<template>
  <div class="mtl-container">
    <topbar :commentdata="commentdata"></topbar>
    <div class="content-wrapper">
      <line></line>
      <!-- 此处将从父组件向contentcard子组件props传值 -->
      <!-- contentcart子组件接受到数据后进行v-for遍历渲染 -->
      <contentcard :commentdata="commentdata"></contentcard>
    </div>
  </div>
</template>

<script>
import topbar from '../../../components/topbar'
import line from '../../../components/line'
import contentcard from '../../../components/contentcard'
export default {
  data () {
    return {
      userInfo: {},
      hasUserInfo: false,
      commentdata: {}
    }
  },
  onLoad () {
    let that = this
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 若已授权，直接调用getUserInfo获取用户信息
          wx.getUserInfo({
            success: function (res) {
              this.userInfo = res.userInfo
              this.hasUserInfo = true
            }
          })
        }
      }
    })
    // 此处暂时通过mock的方式模拟获取后台数据
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/11712/api/mytimeline',
      method: 'GET',
      success: function (res) {
        that.commentdata = res.data
      }
    })
  },
  components: {
    topbar,
    line,
    contentcard
  }
}
</script>

<style lang="sass" scoped>
  .mtl-container
    padding: 16px
    letter-spacing: 1px
    .content-wrapper
      margin-top: 16px
      display: flex
</style>
