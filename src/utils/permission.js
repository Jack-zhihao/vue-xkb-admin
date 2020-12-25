/*
 * @Author: zhihao
 * @Date: 2020-06-16 14:32:44
 * @LastEditTime: 2020-07-07 10:29:35
 * @LastEditors: Please set LastEditors
 * @Description: 全局执行文件，过滤路由操作
 * @FilePath: \app\src\utils\permission.js
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import router, { asyncRoutes, resetRouter } from '@/router'
import { getAuthRouter, filterAuthRouter, getToken } from '@/utils/auth'
import { Message } from 'element-ui'
import { initLayout } from '@/utils/utils'

/**
 * @description: 此文件添加页面进度条（NProgress）；添加前置路由守卫（beforeEach）=> 判断当前用户登录信息（操作未登录跳转，过期跳转）；获取用户权限路由；
 */
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  // 初始化页面
  initLayout()

  // 进度条开始
  NProgress.start()

  // 判断当前系统是否已存在用户信息
  if (getToken()) {
    // 添加参数initFirstView（判断当前页面是否是以刷新）；刷新页面之后做以下操作
    const initFirstView = store.getters.initFirstView
    if (!initFirstView) {
      // 修改vuex仓库 initFirstView 状态；true: 不执行此逻辑
      store.dispatch('setting/SET_FirstView', true)

      // 获取权限路由（getAuthRouter =》 使用当前路由与后台返回路由进行筛选添加）
      const authRouter = getAuthRouter()

      let routes = filterAuthRouter(authRouter, asyncRoutes)

      routes = [...routes, { path: '*', redirect: '/404' }]

      // 提交到仓库的Routes,用于渲染侧边栏
      store.dispatch('permission/SET_Routes', routes)

      // 重置路由
      resetRouter()

      // 添加路由
      router.options.routes = routes
      router.addRoutes(routes)

      // 默认当前路由为 '/' => 跳转 '/controller'
      if (to.path === '/') return next({ path: '/controller', replace: true })
      // 需要进行重定向跳转
      next({ ...to, replace: true })
    } else next()
  } else {
    to.fullPath === '/login' ? next() : (() => {
      Message.info('请登陆！')
      next('/login')
    })()
  }
})

// 添加路由后置守卫 => 统一结束进度条
router.afterEach((t) => {
  NProgress.done()
  if (t.meta && t.meta.title) {
    document.getElementsByTagName('title')[0].innerHTML = `学魁榜 - ${t.meta.title}`
  }
})
