<template>
  <view :class="styles.container">
    <text>我的</text>
    <nut-button type="primary">主要按钮</nut-button>
   <view>
     <nut-button type="info" @click="goToVuex">vuex</nut-button>
   </view>
  </view>
</template>

<script lang="ts">
import styles from './index.module.scss';
import {navigateTo} from '@tarojs/taro';

export default {
  name: 'Index',
  components: {

  },
  setup(){

    function goToVuex() {
      navigateTo({
        url: '/pages/index/counter/index'
      })
    }
    return {
      styles,
      goToVuex
    }
  }
}
</script>

<style lang="scss">

</style>
