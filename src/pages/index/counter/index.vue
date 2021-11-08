<template>
  <view>
    <nut-button type="primary" @click="add">增加</nut-button>
    <view>
      <text>{{count}}</text>
    </view>
  </view>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'Counter',
  setup() {
    const store = useStore();
    function add() {
      store.commit("counter/setCount")
    }
    return {
      add,
      count: computed(() => store.state.counter.count)
    }
  }
})
</script>
<style lang="scss">

</style>
