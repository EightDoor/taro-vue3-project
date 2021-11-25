import {
  Button,
  Navbar,
  Icon,
  BackTop,
  InfiniteLoading,
  Divider,
} from '@nutui/nutui-taro';

const register = (app: any) => {
  app.use(Button)
    .use(Navbar)
    .use(BackTop)
    .use(Icon)
    .use(InfiniteLoading)
    .use(Divider);
};

export default register;
