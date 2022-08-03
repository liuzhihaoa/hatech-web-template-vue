/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-09-20 10:29:56
 * @LastEditTime: 2019-09-20 10:32:29
 */

import defaultConfig from './config.default'

export default {
  ...defaultConfig,
  ...(process.env.NODE_ENV === 'development' ? require('./config.dev').default : process.env.NODE_ENV === 'production' ? require('./config.prod').default : {})
}
