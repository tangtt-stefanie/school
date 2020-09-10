/*
 * @Author: MR.T
 * @Date: 2020-09-08 13:39:47
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-08 22:13:16
 * @Description: No Description
 * @FilePath: \article-manage\mock\index.js
 */
import Mock from 'mockjs'

import project from './project'

const baseURL = 'http://192.168.2.100:8996/mock'

const mocks = [
  ...project
]

// mock请求方法放在这里统一处理,1是简便写法,2是如果请求路径需要加统一前缀或域名,可以在这里处理
for (const mock of mocks) {
  Mock.mock(baseURL+mock.url, mock.type, mock.response)
}