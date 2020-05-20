//资信信息
import request from '@/utils/dxgetpost'
export default {
    // 获取有效资信信息（分页）
    getinformationList(params) {
        return request({
            url: '/information/informationList',
            method: 'post',
            data: params
        })
    },
    // 修改资信信息
    xgmodInformation(params) {
        return request({
            url: '/information/modInformation',
            method: 'post',
            data: params
        })
    },
    // 创建 资信信息
    addInformation(params) {
        return request({
            url: '/information/addInformation',
            method: 'post',
            data: params
        })
    },
    //  资信信息详情
    informationDetail(id) {
        return request({
            url: '/information/informationDetail/'+id,
            method: 'post'
        })
    }
}
