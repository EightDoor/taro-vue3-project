<template>
  <view>
    <nav-bar :title="title" :isLeft="isLeft">
      <slot name="navBarRight" />
    </nav-bar>
    <nut-tabs v-if="list.length > 0" v-model="selectTab">
      <nut-tabpane
        :title-scroll="true"
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
       >
        <list-loading
          :refresh="refresh"
          @loadMore="loadMore"
          @onScroll="onScroll"
          @goTop="goTop"
          :isTab="true"
        >
          <slot :name="item.slotName"/>
        </list-loading>
      </nut-tabpane>
    </nut-tabs>
    <list-loading
      v-else
      :refresh="refresh"
      @loadMore="loadMore"
      @onScroll="onScroll"
      @goTop="goTop"
    >
      <slot />
    </list-loading>
  </view>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import NavBar from '@src/components/NavBar/index.vue';
import ListLoading from '../ListLoading/index.vue';
import { CallLoadMoreType, TabsListType } from '../../types';
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
      default: true,
    },
    refresh: {
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
      type: Array as PropType<TabsListType[]>,
      default: () => [],
    },
  },
  emits: ['refresh', 'loadMore', 'goTop', 'changeIndex'],
  setup(props, { emit }) {
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

    const selectTab = ref(0);

    return {
      loadMore,
      onScroll,
      goTop,

      change,
      current,
      defaultTextColor,

      style,

      // tabs
      selectTab,
    };
  },
});
</script>
