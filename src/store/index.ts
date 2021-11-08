import { createStore, createLogger } from 'vuex';
import counter from './modules/counter';

const store = createStore({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [createLogger()],
    modules: {
        counter,
    }
})

export default store
