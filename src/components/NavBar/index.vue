<template>
  <view>
    <nut-navbar @on-click-title="titleClick" @on-click-right="rightClick" @on-click-back="backEvent" :left-show="leftShow" :desc="desc" :title="title" :tit-icon="titIcon" :icon="icon"></nut-navbar>

    <scroll-view :scroll-y="true" :class="styles.content" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-top="scrollTop">
      <slot/>
      <nut-backtop  @click="handleClick"></nut-backtop>
    </scroll-view>
  </view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {navigateBack} from '@tarojs/taro';
import  styles from './index.module.scss'
import {BaseEventOrigFunction} from "@tarojs/components";
import log from '@/src/utils/log';
import {onScrollDetail} from "@tarojs/components/virtual-list";

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

    const scrollTop = ref(0)
    function upper(val: BaseEventOrigFunction<any>) {
      log.i(val, '到达顶部');
    }

    function lower(val: BaseEventOrigFunction<any>) {
      log.i(val, '到达底部');
    }

    function scroll(val: BaseEventOrigFunction<onScrollDetail>) {
      log.i(val, '滚动')
    }
    return {
      titleClick,
      rightClick,
      backEvent,

      handleClick,
      upper,
      lower,
      scroll,
      scrollTop,

      styles,
    }
  }
})
</script>
