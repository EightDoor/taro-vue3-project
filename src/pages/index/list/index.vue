<template>
  <custom-content title="加载更多" :isLeft="true" :refresh="true" @load-more="loadMore">
    <view
      v-for="(item, index) in list"
      :key="index"
      style="border: 1px solid red; height: 100px"
    >
      <text>{{ item.id }} {{ item.title }}</text>
    </view>
  </custom-content>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { cloneDeep } from 'lodash';
import log from '@src/utils/log';
import { CallLoadMoreType } from '@src/types/index';
import CustomContent from '@src/components/Conetnt/index.vue';

export interface List {
  title: string;
  id: number;
}
export default defineComponent({
  name: 'PagesLoadMore',
  components: {
    CustomContent,
  },
  setup() {
    const list = ref<List[]>([]);
    const sourceList = ref<List[]>([]);

    // moack 数据
    function getList() {
      const result: List[] = [];
      for (let i = 0; i < 35; i += 1) {
        result.push({
          title: `当前是第${i}项`,
          id: i,
        });
      }
      sourceList.value = result;
      const v = cloneDeep(result);
      list.value = cloneDeep(v.splice(0, 10));
    }
    onMounted(() => {
      getList();
    });

    // 刷新
    function refresh(data: CallLoadMoreType) {
      setTimeout(() => {
        data.done();
        const result = cloneDeep(sourceList.value);
        list.value = result.splice(0, 10);
      }, 2000);
    }

    // 加载更多
    function loadMore(data: CallLoadMoreType) {
      log.d(data.page, 'page');
      if (data.page === 1) {
        refresh(data);
        return;
      }
      const result = cloneDeep(sourceList.value);
      const v = result.splice((data.page - 1) * data.size, 10);
      log.d(v, '分页的数据');
      setTimeout(() => {
        data.done(v);
        list.value = list.value.concat(v);
      }, 2000);
    }

    return {
      loadMore,
      list,
    };
  },
});
</script>

<style></style>
