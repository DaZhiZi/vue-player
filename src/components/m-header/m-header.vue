<template>
  <div id="m-header">
    <h1 class="m-header-title">My Music</h1>
  </div>
</template>

<script>

export default {
  name: 'MHeader',
}
</script>

<style scoped lang="stylus">
@import '~stylus/mixin.styl'
@import '~stylus/variable.styl'

  #m-header
    height: 3.67rem
    text-align: center
    background: $color-background
    color: $color-theme
    .m-header-title
      line-height: 3.67rem
      font-size: $font-size-large

</style>
