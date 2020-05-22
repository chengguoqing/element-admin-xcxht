// 投票后台
import request from '@/utils/dxgetpost'
export default {
    // 获取比赛活动列表
    matchListAll(params) {
        return request({
            url: '/match/matchListAll',
            method: 'post',
            data: params
        })
    },
    // 新增比赛活动
    addMatch(params) {
        params.field1Fill = params.field1Fill ? 0 : 1
        params.field1Show = params.field1Show ? 0 : 1
        params.field2Fill = params.field2Fill ? 0 : 1
        params.field2Show = params.field2Show ? 0 : 1
        params.field3Fill = params.field3Fill ? 0 : 1
        params.field3Show = params.field3Show ? 0 : 1
        params.field4Fill = params.field4Fill ? 0 : 1
        params.field4Show = params.field4Show ? 0 : 1
        params.field5Fill = params.field5Fill ? 0 : 1
        params.field5Show = params.field5Show ? 0 : 1
        params.imgNumCheck = params.imgNumCheck ? 0 : 1
        params.imgNumShow = params.imgNumShow ? 0 : 1
        params.videoNumCheck = params.videoNumCheck ? 0 : 1
        params.videoNumShow = params.videoNumShow ? 0 : 1
        return request({
            url: '/match/addMatch',
            method: 'post',
            data: params
        })
    },
    // 修改比赛活动
    modMatch(params) {
        return request({
            url: '/match/modMatch',
            method: 'post',
            data: params
        })
    },

    // 获取参赛作品列表
    matchOpusList(params) {
        return request({
            url: '/match/matchOpusList',
            method: 'post',
            data: params
        })
    }
}
