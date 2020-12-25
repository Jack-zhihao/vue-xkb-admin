/*
 * @Author: your name
 * @Date: 2020-06-11 12:34:49
 * @LastEditTime: 2020-06-30 15:27:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\src\router\modules\testNoteManage.js
 */
const testNoteManageRouter = {
  path: '/testNoteManage',
  component: () => import('@/layout'),
  name: 'testNoteManage',
  redirect: 'noRedirect',
  meta: {
    title: '学霸笔记管理',
    icon: 'iconpen'
  },
  children: [
    // 学霸笔记分类
    {
      path: '/testNoteClass',
      component: () => import(/* webpackChunkName: "testNoteManage" */ '@/views/testNoteManage/testNoteClass/testNoteClass'),
      name: 'testNoteClass',
      meta: { title: '学霸笔记分类', noCache: true }
    },
    {
      path: '/testNoteList',
      component: () => import(/* webpackChunkName: "testNoteManage" */ '@/views/testNoteManage/testNoteList/testNoteList'),
      name: 'testNoteList',
      meta: { title: '学霸笔记列表', noCache: true }
    },
    {
      path: '/testNoteListDetail',
      component: () => import(/* webpackChunkName: "testNoteManage" */ '@/views/testNoteManage/testNoteList/testNoteListDetail'),
      name: 'testNoteListDetail',
      hidden: true,
      meta: { title: '学霸笔记列表-详情', noCache: true }
    },
    {
      path: '/testNoteListAdd',
      component: () => import(/* webpackChunkName: "testNoteManage" */ '@/views/testNoteManage/testNoteList/testNoteListAdd'),
      name: 'testNoteListAdd',
      hidden: true,
      meta: { title: '学霸笔记列表-添加', noCache: true }
    },
    {
      path: '/test',
      component: () => import(/* webpackChunkName: "testNoteManage" */ '@/views/testNoteManage/test/test'),
      name: 'test',
      hidden: false,
      meta: { title: '测试页面', noCache: true }
    }
  ]
}

export default testNoteManageRouter
