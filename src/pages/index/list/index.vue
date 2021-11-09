<template>
  <view>
    <nav-bar title="上拉加载，下拉刷新">
      <list-loading
          :list="data.list"
          :defaultPageSize="data.defaultPageSize"
          :defaultPageNum="data.defaultPageNum"
          @load="load"
          @refresh="refresh"
      >
        <view style="height: 100px" v-for="(item, index) in data.list" :key="index">
          <text>
            {{item.title}}
          </text>
        </view>
      </list-loading>
    </nav-bar>
  </view>
</template>
<script lang="ts">
import {defineComponent, reactive, onMounted} from 'vue';
import NavBar from '@src/components/NavBar/index.vue';
import ListLoading, { ListLoadingType } from '@src/components/ListLoading/index.vue';
import log from "@src/utils/log";


export default defineComponent({
  name: "List",
  components: {
    ListLoading,
    NavBar,
  },
  setup() {
    onMounted(()=>{
      init();
    })

    const data = reactive<ListLoadingType>({
      defaultPageSize: 10,
      defaultPageNum: 1,
      list: [],
      allList: []
    })

    const init = ()=>{
      const list: {
        title: string
      }[] = [];
      for (let i=0;i<25;i++) {
        list.push({
          title: i.toString()
        })
      }
      data.allList = list;
      data.list = list.splice(0, 10)
    }

    function refresh(done) {
      init();
      done(data.list);
    }
    async function load({page, done}) {
      const {pageSize, pageNum} = page;
      log.i(pageSize, '分页数量')
      log.i(pageNum, '当前页')
      setTimeout(()=>{
        const sourceData = JSON.parse(JSON.stringify(data.allList));
        const callDataList = sourceData.splice(pageSize * (pageNum -1), pageSize * pageNum);
        console.log(callDataList, 'data')
        data.list = data.list.concat(callDataList);
        done(callDataList)
      }, 2000)
    }
    return {
      data,

      refresh,
      load
    }
  }
})
</script>
<style lang="scss">

</style>
