import fetch from '@server/index'

/**
 * @method 登录
 * @param {Object} data - 参数对象
 * @param {String} data.username - 账号
 * @param {String} data.password - 密码
 */
export const Login = data => fetch({
  url: 'login',
  method: 'POST',
  data
})

/**
 * @method 获取用户信息
 */
export const GetUserInfo = () => fetch({
  url: 'me',
  method: 'GET'
})
