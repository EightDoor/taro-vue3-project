import { showToast } from '@tarojs/taro';

const Toast = {
      showMsg: (title: string, icon?:"success" | "loading" | "none",mask?: boolean, duration?: number) => {
        return showToast({
            title,
            icon: icon??'success',
            duration: duration??2000,
            mask: mask??true,
        })
  },
}

export default Toast
   