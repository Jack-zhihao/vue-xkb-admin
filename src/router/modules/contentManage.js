const contentManageRouter = {
  path: '/contentManage',
  component: () => import('@/layout'),
  name: 'contentManage',
  redirect: 'noRedirect',
  meta: {
    title: '内容管理',
    icon: 'iconfolder'
  },
  children: [
    // 话术管理
    {
      path: '/speechcraft',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/speechcraft/speechcraft'),
      name: 'speechcraft',
      meta: { title: '话术管理', noCache: true }
    },
    {
      path: '/speechcraftAdd',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/speechcraft/speechcraftAdd'),
      name: 'speechcraftAdd',
      hidden: true,
      meta: { title: '话术管理-添加', noCache: true }
    },
    {
      path: '/speechcraftDetail',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/speechcraft/speechcraftDetail'),
      name: 'speechcraftDetail',
      hidden: true,
      meta: { title: '话术管理-详情', noCache: true }
    },
    {
      path: '/learnMethod',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/learnMethod/learnMethod'),
      name: 'learnMethod',
      meta: { title: '学习方法', noCache: true }
    },
    {
      path: '/learnMethodDetail',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/learnMethod/learnMethodDetail'),
      name: 'learnMethodDetail',
      hidden: true,
      meta: { title: '学习方法-详情', noCache: true }
    },
    {
      path: '/learnMethodAdd',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/learnMethod/learnMethodAdd'),
      name: 'learnMethodAdd',
      hidden: true,
      meta: { title: '学习方法-添加', noCache: true }
    },
    {
      path: '/learnMethodRecycle',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/learnMethodRecycle/learnMethodRecycle'),
      name: 'learnMethodRecycle',
      meta: { title: '学习方法回收站', noCache: true }
    },
    {
      path: '/learnMethodRecycleDetail',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/learnMethodRecycle/learnMethodRecycleDetail'),
      name: 'learnMethodRecycleDetail',
      hidden: true,
      meta: { title: '学习方法回收站-详情', noCache: true }
    },
    {
      path: '/consultManage',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/consultManage/consultManage'),
      name: 'consultManage',
      meta: { title: '咨询管理', noCache: true }
    },
    {
      path: '/consultManageAdd',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/consultManage/consultManageAdd'),
      name: 'consultManageAdd',
      hidden: true,
      meta: { title: '咨询管理-添加', noCache: true }
    },
    {
      path: '/bannerManage',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/bannerManage/bannerManage'),
      name: 'bannerManage',
      meta: { title: '广告管理', noCache: true }
    },
    {
      path: '/websiteConsultEdit',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/bannerManage/websiteConsultEdit'),
      name: 'websiteConsultEdit',
      hidden: true,
      meta: { title: '修改官网资讯轮播图', noCache: true }
    },
    {
      path: '/websiteIndexEdit',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/bannerManage/websiteIndexEdit'),
      name: 'websiteIndexEdit',
      hidden: true,
      meta: { title: '修改官网首页轮播图', noCache: true }
    },
    {
      path: '/appIndexEdit',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/bannerManage/appIndexEdit'),
      name: 'appIndexEdit',
      hidden: true,
      meta: { title: '修改app首页轮播图', noCache: true }
    },
    {
      path: '/appIntryEdit',
      component: () => import(/* webpackChunkName: "contentManage" */ '@/views/contentManage/bannerManage/appIntryEdit'),
      name: 'appIntryEdit',
      hidden: true,
      meta: { title: '修改APP首页分类入口', noCache: true }
    }
  ]
}
export default contentManageRouter
