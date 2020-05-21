// 投票后台
import request from '@/utils/dxgetpost'
export default {
    // 获取参赛作品列表
    matchOpusList(params) {
        return request({
            url: '/match/matchOpusList',
            method: 'post',
            data: params
        })
    }
}
