<template>
  <div class="container">

    <navigator open-type="switchTab"/>
    <!-- <footer>
      <a href="/pages/test/main">
        <img src="../../../static/img/find-cat.png" alt="">
        <p>寻找猫</p>
      </a>
      <a href="#">
        <img src="../../../static/img/community.png" alt="">
        <p>铲屎官社区</p>
      </a>
      <a href="#">
        <img src="../../../static/img/self-center.png" alt="">
        <p>个人中心</p>
      </a>
    </footer> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              console.log(res)
            }
          })
        }
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150rpx;
  display: flex;
  > a {
    flex:1; 
    text-align: center;
    > img {
      margin-top: 30rpx;
      width: 60rpx;
      height: 60rpx;
    }
    > p {
      font-size: 20rpx;
    }
  }
}
</style>
