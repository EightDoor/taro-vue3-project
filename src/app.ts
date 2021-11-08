import { createApp } from 'vue'

import registerComponents from './register_components'
import '@nutui/nutui-taro/dist/style.css';

import store from './store';
import './app.scss'

const App = createApp({
  onShow () {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(store)
registerComponents(App)

export default App
