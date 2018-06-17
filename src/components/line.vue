<template>
  <div class="line-container">
    <div class="line"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
  .line-container
    position: relative
    width: 38px
    .line
      margin-left: -1px
      position: absolute
      top: 0
      left: 50%
      bottom: 0
      width: 1px
      background: #ae9881
</style>
