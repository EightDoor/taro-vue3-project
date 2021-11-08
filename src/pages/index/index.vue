<template>
  <view :class="styles.container">
    <text>我的</text>
  </view>
</template>

<script lang="ts">
import styles from './index.module.scss';
export default {
  name: 'Index',
  components: {

  },
  setup(){

    return {
      styles
    }
  }
}
</script>

<style lang="scss">

</style>
