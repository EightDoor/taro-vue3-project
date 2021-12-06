<template>
 <nav-bar title="vuex">
   <view :class="styles.counter_height">
     <nut-button type="primary" @click="add">增加</nut-button>
     <view>
       <text>{{count}}</text>
     </view>
   </view>
 </nav-bar>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';
import NavBar from '@src/components/NavBar/index.vue';
import styles from './index.module.scss';

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
      count: computed(() => store.state.counter.count),
      styles,
    }
  }
})
</script>
