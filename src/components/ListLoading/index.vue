<template>
  <scroll-view :class="styles.c_height" :scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-top="scrollTop">
    <view :class="styles.content_slot">
      <slot/>
    </view>
    <nut-divider dashed>
      {{refreshHasMore?loadMoreLoadingText: loadNoMore}}
    </nut-divider>
  </scroll-view>
</template>
<script lang="ts">
import {defineComponent, toRefs, ref, reactive, watch} from 'vue';
import utils from '@/src/utils';
import  styles from '../NavBar/index.module.scss';
import {BaseEventOrigFunction} from "@tarojs/components";
import log from "@/src/utils/log";

export interface ListLoadingType {
  defaultPageSize?: number;
  defaultPageNum?: number;
  list: Array<any>
}
export default defineComponent({
  name: "ListLoading",
  emits: ["load", "refresh"],
  props: {
    list: {
      type: Array,
      default: [],
      required: true,
    },
    defaultPageSize: {
      type: Number,
      default: 10,
    },
    defaultPageNum: {
      type: Number,
      default: 1,
    },
    loadMoreLoadingText: {
      type: String,
      default: "加载中..."
    },
    loadNoMore: {
      type: String,
      default: "没有更多数据了"
    }
  },
  setup(props, {emit}) {
    const isFirst = ref(false)
    const refreshHasMore = ref(true);
    const moreData = reactive({
      loadMoreLoadingText: props.loadMoreLoadingText,
      loadNoMore: props.loadNoMore
    })
    const data = reactive<ListLoadingType>({
      refreshList: props.list,
      defaultPageSize: props.defaultPageSize,
      defaultPageNum: props.defaultPageNum,
    });

    const isMoreFun = ()=>{
      if(data.refreshList.length < data.defaultPageSize) {
        refreshHasMore.value = false
        return false
      }else {
        return true;
      }
    }
    const refreshLoadMore = async () => {
      if(isMoreFun()) {
        data.defaultPageNum += 1;
        emit("load", {
          page: {
            pageSize: data.defaultPageSize,
            pageNum: data.defaultPageNum,
          },
          done: (list)=>{
            data.refreshList = list;
            isMoreFun()
          },
        })
      }
    };

    const refresh = () => {
       emit("refresh", (list)=>{
         data.defaultPageNum = 1;
         utils.showMsg("刷新成功")
         refreshHasMore.value = true;
         data.refreshList = list
      })
    }

    const scrollTop = ref(0)

    function upper(e: BaseEventOrigFunction<any>) {
      log.d(e, '顶部');
      refresh()
    }
    function lower(e: BaseEventOrigFunction<any>) {
      log.d(e, "底部");
      refreshLoadMore();
    }
    function scroll(e: BaseEventOrigFunction<any>) {
//      log.d(e, "滚动");
    }

    watch(()=>props.list, (newVal)=>{
      if(!isFirst.value && newVal) {
        data.refreshList = newVal;
        isFirst.value = true;
      }
    })
    return {
      refreshLoadMore,
      refreshHasMore,
      refresh,
      ...toRefs(data),
      ...toRefs(moreData),

      styles,

      upper,
      lower,
      scroll,
      scrollTop
    };
  }
})

</script>
<style lang="scss">

</style>
