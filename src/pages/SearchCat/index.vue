<template>
    <div class="cat-box">
        <p class="top-logo">图片</p>
      <scroll-view class="scroll-view" scroll-x>
        <div class="cat-message">
          <div class="img-div">
              <p>添加图片</p>
          </div>
          <div class="img-div">
            <img src="../../../static/img/timeline/day1-2.png" alt="" @click="navigateTo(naviUrl.CatMessage)">
          </div>
          <div class="img-div">
            <img src="../../../static/img/timeline/day1-2.png" alt="" >
          </div>

        </div>
      </scroll-view>
      <!--猫的特征-->
      <div class="cat-especial">
        <div class="cat-name">
          <label for="">名字</label>
          <input type="text" placeholder="给它取个名字吧">
        </div>
        <div class="cat-fat">
          <label for="">特征</label>
          <textarea name=""  cols="30" rows="10" placeholder="简单形容一下它"> </textarea>
        </div>
        <div class="cat-follow">
          <label for="">关注它</label>
          <div class="right-follow">
            <switch checked bindchange="notify_switcher" color="#cd9057"/>
          </div>
        </div>
      </div>

      <!--footer-->
      <p class="cat-footer">您将会收到任何关于它的消息</p>
      <button class="btn-footer">提交</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      naviUrl: {
        CatMessage: './CatMessage/main'
      }
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
  @import '../../../static/font/iconfont.css'
  .cat-box
    background: #f0eff4
    font-size: 14px
    width: 100%
    height: 100vh
    .top-logo
      font-weight: bold
      padding: 10px 10px
      font-size: 14px
    .scroll-view
      /*float: left*/
      height: 130px
      /*border: 1px solid red*/
      margin-left: 10px
      margin-bottom: 10px
      white-space: nowrap
      .cat-message
        white-space: nowrap
        width: 100%
        height: 100%
        text-align: center
        .img-div
          display: inline-block
          background: #fff
          /*border: 1px solid red*/
          margin-right: 10px
          position: relative
          width: 130px
          height: 130px
          color: #ccc
          box-shadow: 2px  4px 5px #ccc
          img
            width: 130px
            height: 130px
          p
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            &:before
              content: '+'
              position: relative
              top: -20px
              left: 50%

  .cat-especial
    background: #fff
    box-shadow: 2px  4px 5px #ccc
    padding: 10px
    .cat-name
      border-bottom: 1px solid #ccc
      display: flex
      label
        margin-right: 20px
        font-weight: bold
      input
        flex: auto
        /*width: 80%*/
    .cat-fat
      border-bottom: 1px solid #ccc
      display: flex
      padding-top: 10px
      label
        margin-right: 20px
        font-weight: bold
    .cat-follow
      display: flex
      padding-top: 10px
      label
        margin-right: 20px
        font-weight: bold
        flex: 1
      .right-follow
        justify-content: flex-end
  .cat-footer
    margin: 0
    padding-left: 10px
    padding-top: 10px
    padding-bottom: 10px
    font-size: 10px
    color: #7f8389
  .btn-footer
    width: 95%
    margin: auto
    background: #cd9037
    color: #fff
    border: none
    outline: none
</style>
