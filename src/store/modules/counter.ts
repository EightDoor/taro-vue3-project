interface CounterModuleType {
    count: number;
}
export default  {
    namespaced: true,
    state: ()=>({
        count:0,
    }) as CounterModuleType,
    mutations: {
        setCount(state):void {
            state.count += 1;
        }
    },
    actions: {

    }
}

