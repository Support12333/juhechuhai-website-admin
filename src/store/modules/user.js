import { GetUserInfo } from "@api/user"

const state = {
  // 登录信息
  token: localStorage.getItem('token') || '',
  // 用户信息
  user: sessionStorage.getItem('user') || ''
}

const mutations = {
  /**
   * @method 设置当前的登录信息
   * @param {String} token - 登录信息
   */
  SETOKEN: (state, token) => {
    localStorage.setItem('token', token)
    state.token = token
  },
  /**
   * @method 设置当前用户信息
   * @param {Object} user - 用户信息
   */
  SETUSER: (state, user) => {
    user = Dense.encrypt(JSON.stringify(user))
    sessionStorage.setItem('user', user)
    state.user = user
  },
  /**
   * @method 退出登录
   */
  LOGOUT: state => {
    state.token = ''
    sessionStorage.clear()
    localStorage.clear()
  }
}

const actions = {
  // 获取用户信息
  async GetUserInfo({ commit }) {
    const res = await GetUserInfo()
    // real_name
    // username
    commit('SETUSER', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
