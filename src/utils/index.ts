import dayjs from 'dayjs';

export default {

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
