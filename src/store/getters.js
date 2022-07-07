const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permission_routes: state => state.permission.routes,
  pickerOptions: state => state.settings.pickerOptions,
  token: state => state.user.token,
  // 获取用户信息
  getUser: state => key => {
    let user = state.user.user
    if (user) {
      user = JSON.parse(Dense.decrypt(user))
      return user[key]
    } else {
      return ''
    }
  },
}
export default getters
