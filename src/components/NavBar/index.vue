<template>
  <view>
    <nut-navbar @on-click-title="titleClick" @on-click-right="rightClick" @on-click-back="backEvent" :left-show="leftShow" :desc="desc" :title="title" :tit-icon="titIcon" :icon="icon"></nut-navbar>

    <view :class="styles.content">
      <slot/>
    </view>
  </view>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {navigateBack} from '@tarojs/taro';
import  styles from './index.module.scss'

export default defineComponent({
  name: "NavBar",
  emits: ['titleClick', 'rightClick', 'backEvent'],
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: "",
    },
    leftShow: {
      type: Boolean,
      default: true,
    },
    titIcon: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    }
  },
  setup (props: any, {emit}) {

    function rightClick() {
      emit("rightClick")
    }

    function titleClick() {
      emit("titleClick")
    }

    function backEvent() {
      navigateBack()
      emit("backEvent")
    }

    function handleClick() {
    }

    return {
      titleClick,
      rightClick,
      backEvent,

      handleClick,

      styles,
    }
  }
})
</script>
