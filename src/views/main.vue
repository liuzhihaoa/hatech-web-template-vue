<template>
    <hatech-layout ref="layout" :menus="MENUS" :currPage="CURRPAGE" :user="USER" :userMenus="userMenus" :headerMenus="headerMenus" @onEvent="onEvent">
      <div slot="header_left" class="logo">
      </div>
      <div slot="content" v-loading="LOADING">
        <hatech-breadcurmb :menus="MENUS" :code="CURRPAGE.code"></hatech-breadcurmb>
        <router-view></router-view>
      </div>
    </hatech-layout>
</template>

<script>
// 使用布局
import { HatechLayout } from 'hatech-web-layout-husmc'
import { mapGetters, mapMutations } from 'vuex'
import { HatechBreadcurmb } from 'hatech-web-component-breadcurmb'
export default {
  components: {
    HatechLayout,
    HatechBreadcurmb
  },
  computed: {
    ...mapGetters('app', ['CURRPAGE', 'MENUS', 'USER', 'LOADING'])
  },
  data() {
    return {
      // 点击用户菜单信息
      userMenus: [
        { event: 'onChangePassWord', name: '修改密码' },
        { event: 'onLogout', name: '注销' }
      ],
      headerMenus: [
        { 
          show: true, 
          type: 'dropdown',
          name: '主题',
          icon: 'zhuti',
          code: 'theme',
          props: {
            options: this.$theme.themes.map(theme => ({
              name: theme.name,
              command: theme.key
            }))
          }
        }
      ]
    }
  },
  methods: {
    ...mapMutations('app', ['Logout']),
    onEvent(args = {}) {
      const { event, params } = args
      this[event] && this[event](params)
      console.log(args)
    },
    onDropdownEvent(args) {
      const { menu, event, params } = args
      if (event === 'onClickMenu' && menu.code === 'theme') {
        const theme = this.$theme.themes.find(t => t.key === params)
        console.log(event, params, theme)
        if (theme) {
          this.$theme.change(theme)
          this.$message.success('主题切换成功')
        }
      }
    },
    onClickMenu(menu) {
      this.$router.push({
        name: menu.code
      })
    },
    onLogout() {
      this.Logout()
      this.$router.replace({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 100%;
  background: url("../assets/img/logo_istorm.png") no-repeat;
  background-size: 100% 100%;
}
</style>