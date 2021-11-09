<template>
 <nav-bar title="vuex">
   <nut-button type="primary" @click="add">增加</nut-button>
   <view>
     <text>{{count}}</text>
   </view>
 </nav-bar>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';
import NavBar from '@/src/components/NavBar/index.vue';

export default defineComponent({
  name: 'Counter',
  components: {
    NavBar
  },
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
