import { request } from '@tarojs/taro';
import log from '@src/utils/log';
import Config from '@src/config';

interface method {
  /** HTTP 请求 OPTIONS */
  OPTIONS;
  /** HTTP 请求 GET */
  GET;
  /** HTTP 请求 HEAD */
  HEAD;
  /** HTTP 请求 POST */
  POST;
  /** HTTP 请求 PUT */
  PUT;
  /** HTTP 请求 DELETE */
  DELETE;
  /** HTTP 请求 TRACE */
  TRACE;
  /** HTTP 请求 CONNECT */
  CONNECT;
}
const http = <T = any>(
  url: string,
  method?: keyof method,
  data?: any,
): Promise<T> => new Promise((resolve, reject) => {
    request({
      url: Config.baseUrl + url,
      method: method ?? 'GET',
      data,
    })
      .then((res) => {
        log.d(res.data, '请求的数据');
        resolve(res.data);
      })
      .catch((err) => {
        log.e(err, '请求错误');
        reject(err);
      });
  });

export default http;
