<template>
    <custom-content title="tabs" :isTab="true" :refresh="true" :list="list">
        <template v-for="item in list" v-slot:[item.slotName]>
            {{item.title}}
        </template>
    </custom-content>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import CustomContent from '@src/components/Conetnt/index.vue';
import { TabsListType } from '@src/types';

export default defineComponent({
  name: 'IndexTabs',
  components: {
    CustomContent,
  },
  setup() {
    const list = ref<TabsListType[]>([
      {
        title: '第一项',
        slotName: 'slot1',
      },
      {
        title: '第二项',
        slotName: 'slot2',
      },
      {
        title: '第三项',
        slotName: 'slot3',
      },
    ]);
    return {
      list,
    };
  },
});
</script>
