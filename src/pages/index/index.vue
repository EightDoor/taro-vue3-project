<template>
  <nav-bar :leftShow="false" title="首页">
    <view :class="styles.container">
      <text>我的</text>
      <nut-button type="primary">主要按钮</nut-button>
      <view>
        <nut-button type="info" @click="goToVuex">vuex</nut-button>
      </view>
      <view>
        <nut-button type="info" @click="goToListLoading">上拉加载，下拉刷新</nut-button>
      </view>
    </view>
  </nav-bar>
</template>

<script lang="ts">
import styles from './index.module.scss';
import {navigateTo} from '@tarojs/taro';
import NavBar from '@src/components/NavBar/index.vue';

export default {
  name: 'Index',
  components: {
    NavBar,
  },
  setup(){

    function goToVuex() {
      navigateTo({
        url: '/pages/index/counter/index'
      })
    }

    function goToListLoading() {
      navigateTo({
        url: '/pages/index/list/index',
      })
    }
    return {
      styles,
      goToVuex,
      goToListLoading
    }
  }
}
</script>
