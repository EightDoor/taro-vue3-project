import { showToast } from '@tarojs/taro';
import * as dayjs from 'dayjs';

export default {
  showMsg: (title: string, icon?:'success' | 'loading' | 'none', mask?: boolean, duration?: number) => showToast({
    title,
    icon: icon ?? 'success',
    duration: duration ?? 2000,
    mask: mask ?? true,
  }),
  /**
   * 格式化时间
   * @param val
   * @param format
   * @returns
   */
  formatTime(val: string | number, format?: string) {
    return dayjs(val).format(format ?? 'YYYY-MM-DD HH:mm:ss');
  },
};
