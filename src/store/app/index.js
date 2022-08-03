import { StoreModule } from 'hatech-web-core'
import { CacheUtil } from 'hatech-web-utils'

import router from '@/router'
import config from '@/config'
import services from './service'

/**
 * 应用信息数据仓库
 */
export default new StoreModule({
  namespaced: true,
  state: {
    // 用户信息
    user: {
      id: 'hatech-user-id',
      name: '同创前端',
    },
    // 当前登录用户token
    token: undefined,
    loading: false,
    // 是否已登录
    hasLogin: false,
    // 当前页面信息
    currPage: {},
    // 上一路由信息
    prevPage: {},
    // 用户菜单
    menus: []
  },
  getters: {
    USER: state => state.user,
    TOKEN: state => state.token,
    LOADING: state => state.loading,
    CURRPAGE: state => state.currPage,
    PREVPAGE: state => state.prevPage,
    MENUS: state => state.menus,
    ROUTES: (state) => {
      const totalMenus = [];
      (function func(dataSource = []) {
        dataSource
          .filter(menu => menu.code && menu.path)
          .forEach(menu => {
            const menuTemplate = menu.template
            let template = totalMenus.find(tm => menuTemplate === tm.meta.template)
            if (!template) {
              template = {
                path: `/ ${menuTemplate}`,
                name: menuTemplate,
                component: resolve => require([`@/views/${menuTemplate}`], resolve),
                meta: {
                  template: menuTemplate
                },
                children: []
              }
              totalMenus.push(template)
            }
            template.children.push({
              path: menu.path,
              name: menu.code,
              params: menu.params,
              meta: {
                id: menu.id
              },
              component: resolve => require([`@/views/${menuTemplate}${menu.path}`], resolve)
            })
            if (menu.children && menu.children.length) func(menu.children)
          })
      })(state.menus || []);
      return totalMenus
    }
  },
  mutations: {
    // 保存上一路由信息
    SavePrev(state, prevPage) {
      state.prevPage = prevPage
      CacheUtil.saveObject(`${config.appCode}_PREVPAGE`, prevPage)
    },
    // 保存当前路由信息
    SaveCurrPage(state, currPage) {
      state.currPage = currPage
      CacheUtil.saveObject(`${config.appCode}_CURRPAGE`, currPage)
    },
    // 保存菜单，注入路由
    SaveMenus(state, menus) {
      state.menus = menus
      if (menus && menus.length > 0) {
        router.addRoutes(this.getters['app/ROUTES'])
      }
    },
    // 登录成功
    LoginSuccess(state, response) {
      const { user_id, access_token } = response.data
      state.hasLogin = true
      state.user = {
        id: user_id
      }
      state.token = access_token
      CacheUtil.save(`${config.appCode.toUpperCase()}_TOKEN`, state.token)
      CacheUtil.saveObject(`${config.appCode.toUpperCase()}_USER`, state.user)
    },
    // 注销成功
    Logout(state) {
      state.user = {}
      state.hasLogin = false
      state.token = undefined;
      ['TOKEN', 'USER'].forEach(key => {
        CacheUtil.remove(`${config.appCode}_${key}`)
      })
    }
  },
  actions: {
  },
  services
})