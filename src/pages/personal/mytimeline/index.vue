<template>
  <div class="mtl-container">
    <topbar></topbar>
    <div class="content-wrapper">
      <line></line>
      <!-- 此处将从父组件向contentcard子组件props传值 -->
      <!-- contentcart子组件接受到数据后进行v-for遍历渲染 -->
      <contentcard></contentcard>
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
      hasUserInfo: false
    }
  },
  // 这里用mounted而不是created，
  // 是因为mpvue的created会在加载时把所有页面的created一起运行
  mounted () {
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
    // 若无用户信息，则返回上一页
    // if (!this.hasUserInfo) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请先登陆',
    //     success: function () {
    //       wx.navigateBack({
    //         delta: 1 // 回退前 delta(默认为1) 页面
    //       })
    //     }
    //   })
    // }
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
