<template>
  <div class="topbar">
    <div class="left">
      <img class="avatar" :src="commentdata.avatarLink">
      <p class="title">
        <span class="em va-m">阳叔</span>
        <span class="va-m">的</span>
        <span class="em va-m">咖啡猫儿</span>
        <i class="icon icon-sex_female va-m"></i>
      </p>
    </div>
    <div class="right">
      <i class="icon icon-add em va-m"></i>
      <span class="em va-m">发帖</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['commentdata']
}
</script>

<style lang="sass" scoped>
  @import '../../static/font/iconfont.css'
  .topbar
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 16px
    color: #ababab
    .va-m
      vertical-align: middle
    .em
      color: #cd9057
    .left
      display: flex
      align-items: center
      .avatar
        margin-right: 14px
        width: 38px
        height: 38px
        border-radius: 50%
        background: #cd9057
      .title
        .icon
          display: inline-block
          font-size: 12px
    .right
      display: flex
      align-items: center
      .icon
        margin: 4px 6px 0 0
        display: inline-block
        font-size: 8px
</style>
