import {Button, Navbar, Icon, BackTop} from "@nutui/nutui-taro";


const register = (app: any)=>{
    app.use(Button)
        .use(Navbar)
        .use(Icon)
        .use(BackTop)
}


export default register;
