<template>
  <view>
    <nav-bar :title="title" :isLeft="isLeft">
      <slot name="navBarRight" />
    </nav-bar>

    <list-loading
      :refresh="refresh"
      @loadMore="loadMore"
      @onScroll="onScroll"
      @goTop="goTop"
      :isTab="isTab"
    >
      <slot />
    </list-loading>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '@src/components/NavBar/index.vue';
import ListLoading from '../ListLoading/index.vue';
import { CallLoadMoreType } from '../../types';
import style from './index.module.scss';

export default defineComponent({
  name: 'ComIndex',
  components: {
    ListLoading,
    NavBar,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
    refresh: {
      type: Boolean,
      default: false,
    },
    isTab: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '#4cd964',
    },
    // button text
    width: {
      type: String,
      default: '50px',
    },
    ceilingHeight: {
      type: Number,
      default: 30,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  emits: [
    'refresh',
    'loadMore',
    'goTop',
    'changeIndex',
  ],
  setup(props, { emit }) {
    const pageNum = ref(1);
    const pageSize = ref(10);

    function loadMore(data: CallLoadMoreType) {
      emit('loadMore', data);
    }

    function onScroll(e: any) {
      //
    }

    function goTop() {
      emit('goTop');
    }

    const defaultTextColor = 'black';
    const current = ref(0);
    function change(val: number) {
      current.value = val;
      emit('changeIndex', val);
    }

    return {
      pageNum,
      pageSize,
      loadMore,
      onScroll,
      goTop,

      change,
      current,
      defaultTextColor,

      style,
    };
  },
});
</script>
