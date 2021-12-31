import { request } from '@tarojs/taro';
import log from '@src/utils/log';
import Config from '@src/config';
import qs from 'qs';

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
    const m = method ?? 'GET';
    const isGet = m === 'GET';
    let params = '';
    if (isGet && data) {
      params = qs.stringify(data, {
        encodeValuesOnly: true,
      });
    }
    const resultUrl = Config.baseUrl + url + (isGet && data ? `?${params}` : '');
    request({
      url: resultUrl,
      method: method ?? 'GET',
      data: isGet ? null : data,
      header: {
        'content-type': 'application/json', // 默认值
      },
      mode: 'cors',
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
