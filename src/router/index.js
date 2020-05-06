import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index')
      }
    ]
  },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
  },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true
  },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
  },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
  },
    {
        path: '/',
        component: Layout,
        name: 'hdgl',
        meta: {
            title: '活动管理',
            icon: 'edit'
        },
        children: [
            {
                path: '',
                component: () => import('@/page/hdgl/index'),
                name: 'hdgl',
                meta: {
                    title: '活动管理'
                }
            },
            {
                path: 'pl',
                component: () => import('@/page/hdgl/pl'),
                name: 'pl',
                meta: {
                    title: '评论列表'
                }
            }, {
                path: 'chuangjian',
                hidden: true,
                component: () => import('@/page/hdgl/chuangjian'),
                name: 'chuangjian',
                meta: {
                    title: '创建活动',
                }
            }
  ]
},
    {
        path: '/consultiveManagement',
        component: Layout,
        children: [{
            path: 'index',
            component: () => import('@/page/consultiveManagement'),
            name: 'consultiveManagement',
            meta: {
                title: '咨询管理',
                icon: 'documentation'
            }
  }]
},
    {
        path: '/vote',
        component: Layout,
        name: 'vote',
        meta: {
            title: '投票后台',
            icon: 'chart'
        },
        children: [
            {
                path: '',
                component: () => import('@/page/vote/index'),
                name: 'vote',
                meta: {
                    title: '投票后台'
                }
            },
            {
                path: 'entry',
                component: () => import('@/page/vote/entry'),
                name: 'entry',
                meta: {
                    title: '参赛作品'
                }
            }, {
                path: 'cjvote',
                hidden: true,
                component: () => import('@/page/vote/cjvote'),
                name: 'cjvote',
                meta: {
                    title: '创建投票'
                }
            },
  ]
}, {
        path: '/TimedPhotos',
        component: Layout,
        name: 'TimedPhotos',
        meta: {
            title: '定时照片',
            icon: 'exit-fullscreen'
        },
        children: [
            {
                path: '',
                component: () => import('@/page/TimedPhotos/index'),
                name: 'TimedPhotos',
                meta: {
                    title: '定时照片'
                }
            },
            {
                path: 'generated',
                component: () => import('@/page/TimedPhotos/generated'),
                name: 'generated',
                meta: {
                    title: '已生成的视频列表'
                }
            },
  ]
}, {
        path: '/classList',
        component: Layout,
        name: 'classList',
        meta: {
            title: '班级列表',
            icon: 'list'
        },
        children: [
            {
                path: '',
                component: () => import('@/page/classList/index'),
                meta: {
                    title: '班级列表'
                }
            },
            {
                path: 'grade',
                component: () => import('@/page/classList/grade'),
                meta: {
                    title: '成绩列表'
                }
            }, {
                path: 'NotificationList',
                component: () => import('@/page/classList/NotificationList'),
                meta: {
                    title: '通知列表'
                }
            }, {
                path: 'TestimonialsList',
                component: () => import('@/page/classList/TestimonialsList'),
                meta: {
                    title: '奖状列表'
                }
            }, {
                path: 'sccj',
                hidden: true,
                component: () => import('@/page/classList/sccj'),
                meta: {
                    title: '上传成绩'
                }
            },{
                path: 'scjz',
                hidden: true,
                component: () => import('@/page/classList/scjz'),
                meta: {
                    title: '上传奖状'
                }
            },
  ]
}, {
        path: '/userControl',
        component: Layout,
        name: 'userControl',
        meta: {
            title: '用户管理',
            icon: 'user'
        },
        children: [
            {
                path: 'userList',
                component: () => import('@/page/userControl/userList'),
                meta: {
                    title: '总的用户列表'
                }
            },
            {
                path: 'teacherList',
                component: () => import('@/page/userControl/teacherList'),
                meta: {
                    title: '老师列表'
                }
            }, {
                path: 'AdministratorList',
                component: () => import('@/page/userControl/AdministratorList'),
                meta: {
                    title: '管理员列表'
                }
            }, {
                path: 'permissionList',
                component: () => import('@/page/userControl/permissionList'),
                meta: {
                    title: '权限列表'
                }
            },
  ]
},
    {
        path: '/configuration',
        component: Layout,
        children: [{
            path: 'index',
            component: () => import('@/page/configuration'),
            name: 'configuration',
            meta: {
                title: '配置信息',
                icon: 'component'
            }
  }]
},
]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
