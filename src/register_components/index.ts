import {
  Button,
  Navbar,
  Icon,
  BackTop,
  InfiniteLoading,
  Divider,
  Tabs,
  TabPane,
} from '@nutui/nutui-taro';

const register = (app: any) => {
  app.use(Button)
    .use(Navbar)
    .use(BackTop)
    .use(Icon)
    .use(InfiniteLoading)
    .use(Divider)
    .use(Tabs)
    .use(TabPane);
};

export default register;
