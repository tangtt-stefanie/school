import Mock from 'mockjs'
import User from './user'

const mockApi = (url,rtype,data)=>{
  Mock.mock('http://localhost:8090'+url, rtype, () => {  // 此处会劫持'http://localhost:8090'+url接口，并返回数据
    return {status:0,data:{info:data}} // 返回模拟数据
  })
}

mockApi('/getUserInfo','post',User.userInfo)