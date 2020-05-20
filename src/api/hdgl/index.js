//活动管理
import request from '@/utils/dxgetpost'
export default {
    // 获取活动列表
    getactivityListAll(params) {
        return request({
            url: '/activity/activityListAll',
            method: 'post',
            data: params
        })
    },
    /*新增 修改活动*/
    getaddActivity(params) {
        // 有id为修改修改
        let url = '/activity/addActivity'
        if (params.id){
            url='/activity/modActivity'
        }
        return request({
            url: url,
            method: 'post',
            data: params
        })
    },
        // 获取评论列表
    getpinglun(params) {
        return request({
            url: '/activity/activityCommentListPage',
            method: 'post',
             data: params
        })
    },
    // 删除评论列表
    delpinglun(id) {
        return request({
            url: '/activity/delActivityComment/'+id,
            method: 'post'
        })
    },
    // 活动详情
    activityDetailxq(id) {
        return request({
            url: '/activity/activityDetail/'+id,
            method: 'post'
        })
    },
}
