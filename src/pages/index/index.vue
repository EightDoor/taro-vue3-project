<template>
  <nav-bar :isLeft="false" title="首页">
    <view  :class="styles.container">
      <view v-for="(item, index) in list" :key="index">
        <nut-button type="info" @click="goTo(item.url)">{{item.title}}</nut-button>
      </view>
    </view>
  </nav-bar>
</template>

<script lang="ts">
import { navigateTo } from '@tarojs/taro';
import NavBar from '@src/components/NavBar/index.vue';
import { ref } from 'vue';
import styles from './index.module.scss';

interface ListType {
    title: string;
    url: string
}
export default {
  name: 'PagesIndex',
  components: {
    NavBar,
  },
  setup() {
    const list = ref<ListType[]>([{
      url: '/pages/index/counter/index',
      title: '计数器(vuex)',
    }, {
      url: '/pages/index/list/index',
      title: '上拉加载，下拉刷新',
    }, {
      url: '/pages/index/tabs/index',
      title: 'tabs',
    },
    ]);
    function goTo(url: string) {
      navigateTo({
        url,
      });
    }

    return {
      styles,
      goTo,
      list,
    };
  },
};
</script>
