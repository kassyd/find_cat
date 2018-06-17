<template>
  <div class="setting-container">
    <div class="section">
      <p class="title">个人信息</p>
      <ul class="list">
        <li class="list-item">
          <label for="p_name">名字</label>
          <input id="p_name" type="text" value="阳叔">
        </li>
        <li class="list-item">
          <label for="p_birDate">生日</label>
          <input id="p_birDate" type="text" value="1997年12月1日">
        </li>
      </ul>
    </div>
    <div class="section">
      <p class="title">基本信息</p>
      <ul class="list">
        <li class="list-item msg-re">
          <div class="left">
            <i class="icon icon-bell"></i>
            <span>消息通知</span>
          </div>
          <div class="right">
            <switch checked bindchange="notify_switcher" color="#cd9057"/>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import '../../../../static/font/iconfont.css'
  .setting-container
    height: 100vh
    font-size: 14px
    background: #f0eff4
    .section
      .title
        padding: 0 16px
        line-height: 32px
        font-size: 12px
        color: #818287
      .list
        padding: 0 16px
        background: #fff
        .list-item
          display: flex
          align-items: center
          line-height: 42px
          border-bottom: 1px solid #f0f0f0
          &:last-child
            border-bottom: none
          &.msg-re
            justify-content: space-between
            .left
              display: flex
              align-items: center
              .icon
                margin-right: 16px
                font-size: 16px
          label
            margin-right: 16px
            font-weight: 600
</style>
