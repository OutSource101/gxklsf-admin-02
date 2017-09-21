import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/lottery',
    component: Layout,
    redirect: 'noredirect',
    name: '开奖管理',
    icon: 'zujian',
    children: [
      { path: 'history', name: '快乐十分期数查询', icon: 'zonghe', component: _import('lottery/index') },
      { path: 'supplement', name: '快乐十分补录期数', icon: 'zonghe', component: _import('lottery/index2') }
    ]
  },

  {
    path: '/memberManger',
    component: Layout,
    redirect: 'noredirect',
    icon: 'xinrenzhinan',
    name: '会员管理',
    children: [
      { path: 'user', name: '用户管理', component: _import('user/index'), meta: { role: ['admin'] }},
      { path: 'agent', name: '代理商', component: _import('user/agent'), meta: { role: ['admin'] }}
    ]
  },
  {
    path: '/oddsManger',
    component: Layout,
    redirect: 'noredirect',
    icon: 'tubiao',
    name: '赔率管理',
    children: [
      { path: 'setHandicap', name: '会员盘口设置', component: _import('odds/set'), meta: { role: ['admin'] }},
      { path: 'odds', name: '快乐十分赔率', component: _import('odds/set'), meta: { role: ['admin'] }}
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: 'noredirect',
    icon: 'table',
    name: '财务报表',
    children: [
      { path: 'history', name: '历史开奖结果', component: _import('user/index'), meta: { role: ['admin'] }},
      { path: 'memberSearch', name: '会员投注查询', component: _import('finance/memberSearch'), meta: { role: ['admin'] }},
      { path: 'memberTable', name: '会员账户报表', component: _import('finance/memberTable'), meta: { role: ['admin'] }},
      { path: 'memberStream', name: '会员账户流水', component: _import('finance/memberStream'), meta: { role: ['admin'] }},
      { path: 'cancelSearch', name: '取消投注查询', component: _import('finance/cancelSearch'), meta: { role: ['admin'] }},
      { path: 'deleteSearch', name: '会员删除注单', component: _import('finance/deleteSearch'), meta: { role: ['admin'] }}
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: 'noredirect',
    icon: 'quanxian',
    name: '系统设置',
    children: [
      { path: 'type', name: '彩种管理', component: _import('setting/type'), meta: { role: ['admin'] }},
      { path: 'changePwd', name: '密码修改', component: _import('setting/changePwd'), meta: { role: ['admin'] }},
      { path: 'rule', name: '游戏规则', component: _import('user/index'), meta: { role: ['admin'] }}
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
