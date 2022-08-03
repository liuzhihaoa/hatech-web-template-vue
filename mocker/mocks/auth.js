const Mockjs = require('mockjs')
const Jwt = require('jsonwebtoken')

const user = {
  id: "123",
  name: '吴浩',
  no: 'admin',
  password: 'admin'
}

module.exports = {
  '[POST] /api/user/login': ctx => {
    console.log(ctx.request.params, ctx.request.body, ctx.request.query)
    const { username, password } = ctx.request.body
    if (username !== user.no || password !== user.password) {
      ctx.body = {
        code: 500,
        msg: '账号或密码错误',
        data: null
      }
      return
    }
    ctx.body = {
      code: 200,
      msg: '操作成功',
      data: {
        user_id: user.id,
        access_token: Jwt.sign(user, 'secret', { expiresIn: '2h' })
      }
    }
  },
  // 获取用户信息
  '[get] /api/user/token': ctx => {
    const headers = ctx.request.headers
    console.log(headers.authorization)
    if (!headers.authorization) {
      ctx.body = {
        code: 401,
        msg: '未授权'
      }
    } else {
      ctx.body = {
        code: 200,
        msg: '操作成功',
        data: user
      }
    }
  },
  // 获取菜单信息
  '[get] /api/user/menus': ctx => {
    ctx.body = {
      code: 200,
      msg: '操作成功',
      data: [{
        "code": "homepage",
        "icon": "home",
        "id": "hatech-web-code-homepage",
        "isDelete": null,
        "isShow": 1,
        "level": 3,
        "menuName": "首页",
        "orderInfo": 0,
        "path": "/home/index",
        "systemFlag": null,
        "template": "main",
        children: []
      },
      {
        "children": [
          {
            "children": null, "code": "hatech-web-code-core", "createTime": null, "createUserId": null, "editTime": null, "editUserId": null, "icon": "home", "id": "hatech-web-code-core", "isDelete": null, "isShow": 1, "level": 4, "menuName": "核心使用", "operationIds": null, "orderInfo": 0, "parentId": "c6e9ed9aea919ee8aad5538d828f31c9", "parentMenuName": null, "path": "/guide/core/index", "systemFlag": null, "template": "main"
          },
          {
            "children": null, "code": "hatech-web-code-plugin", "createTime": null, "createUserId": null, "editTime": null, "editUserId": null, "icon": "home", "id": "hatech-web-code-plugin", "isDelete": null, "isShow": 1, "level": 4, "menuName": "插件使用", "operationIds": null, "orderInfo": 0, "parentId": "c6e9ed9aea919ee8aad5538d828f31c9", "parentMenuName": null, "path": "/guide/plugin/index", "systemFlag": null, "template": "main"
          },
          {
            "children": null, "code": "hatech-web-code-component", "createTime": null, "createUserId": null, "editTime": null, "editUserId": null, "icon": "home", "id": "hatech-web-code-component", "isDelete": null, "isShow": 1, "level": 4, "menuName": "组件使用", "operationIds": null, "orderInfo": 0, "parentId": "c6e9ed9aea919ee8aad5538d828f31c9", "parentMenuName": null, "path": "/guide/component/index", "systemFlag": null, "template": "main"
          },
          {
            "children": null, "code": "hatech-web-code-element", "createTime": null, "createUserId": null, "editTime": null, "editUserId": null, "icon": "home", "id": "hatech-web-code-element", "isDelete": null, "isShow": 1, "level": 4, "menuName": "ElementUI", "operationIds": null, "orderInfo": 0, "parentId": "c6e9ed9aea919ee8aad5538d828f31c9", "parentMenuName": null, "path": "/guide/element/index", "systemFlag": null, "template": "main"
          }
        ],
        "code": "hatech-web-code-guide",
        "icon": "home",
        "id": "hatech-web-code-guide",
        "isDelete": null,
        "isShow": 1,
        "level": 3,
        "menuName": "指南",
        "orderInfo": 0,
        "path": "/guide",
        "systemFlag": null,
        "template": "main"
      }]
    }
  },
  // 获取菜单鉴权信息
  '[get] /api/menu/auth': ctx => {
    const data = []
    ctx.body = {
      code: 200,
      msg: '操作成功',
      data
    }
  }
}
