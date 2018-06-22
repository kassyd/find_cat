<template>
  <div class="personal-container">
    <div class="person-info">
      <div v-if="!hasUserInfo">
        <button v-if="canIUse" open-type="getUserInfo" @click="bindGetUserInfo">授权登陆</button>
        <p v-else>请更新微信版本</p>
      </div>
      <div v-else>
        <img :src="userInfo.avatarUrl" class="avatar">
        <p class="txt">{{userInfo.nickName}}</p>
        <p class="txt">毛积分：166</p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li class="list-item" @click="navigateTo(naviUrl.setting)">
          <div class="left">
            <i class="icon icon-gear"></i>
            <span>设置</span>
          </div>
          <div class="right">
            <i class="icon-more"></i>
          </div>
        </li>
        <li class="list-item" @click="navigateTo(naviUrl.notify)">
          <div class="left">
            <i class="icon icon-bell"></i>
            <span>消息通知</span>
          </div>
          <div class="right">
            <span v-if="hasUserInfo" class="num">2</span>
            <i class="icon-more"></i>
          </div>
        </li>
        <li class="list-item" @click="navigateTo(naviUrl.mytimeline)">
          <div class="left">
            <i class="icon icon-paw"></i>
            <span>我的时间轴</span>
          </div>
          <div class="right">
            <i class="icon-more"></i>
          </div>
        </li>
        <li class="list-item" @click="navigateTo(naviUrl.mustknown)">
          <div class="left">
            <i class="icon icon-information"></i>
            <span>须知</span>
          </div>
          <div class="right">
            <i class="icon-more"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      naviUrl: {
        setting: './setting/main',
        notify: './notify/main',
        mytimeline: './mytimeline/main',
        mustknown: './mustknown/main'
      }
    }
  },
  methods: {
    bindGetUserInfo () {
      let that = this
      wx.getUserInfo({
        success: function (res) {
          that.userInfo = res.userInfo
          that.hasUserInfo = true
        }
      })
    },
    // 跳转页面
    navigateTo (url) {
      wx.navigateTo({
        url: url
      })
    }
  },
  created () {
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
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../static/font/iconfont.css'
  .personal-container
    height: 100vh
    font-size: 16px
    background: #f0eff4
    .person-info
      margin-bottom: 20px
      height: 215px
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      color: #fff8da
      background: #cd9057
      .avatar
        margin-bottom: 10px
        display: block
        width: 118px
        height: 118px
        border-radius: 50%
      .txt
        line-height: 30px
        text-align: center
    .content
      .list-item
        display: flex
        justify-content: space-between
        align-items: center
        height: 44px
        background: #fff
        border-bottom: 1px solid #e0e0e0
        &:last-child
          border-bottom: none
        .left, .right
          display: flex
          align-items: center
          .icon
            margin: 0 22px 0 16px
            font-size: 18px
          .icon-more
            margin: 0 20px 0 10px
            color: #c8c8ca
          .num
            font-size: 12px
            color: #8f8f8f
</style>
