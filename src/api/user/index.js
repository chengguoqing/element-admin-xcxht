//用户管理
import request from '@/utils/dxgetpost'
export default {
    // 获取用户列表
    getuserList(params) {
        return request({
            url: '/user/userList',
            method: 'post',
            data: params
        })
    }
}
