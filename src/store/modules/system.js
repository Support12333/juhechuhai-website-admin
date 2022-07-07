import { GetDictionaryList } from '@api/system'

const state = {
  // 国家列表
  countries: JSON.parse(sessionStorage.getItem('countries')) || [],
  // 应用列表
  applys: JSON.parse(sessionStorage.getItem('applys')) || [],
  // 任务列表
  tasks: JSON.parse(sessionStorage.getItem('tasks')) || {},
  // 渠道列表
  channels: JSON.parse(sessionStorage.getItem('channels')) || {}
}

const mutations = {
  /**
   * @method 设置国家列表
   * @param {Array} countries - 国家列表
   */
  SETCOUNTRIES(state, countries) {
    sessionStorage.setItem('countries', JSON.stringify(countries))
    state.countries = countries
  },
  /**
   * @method 设置应用列表
   * @param {Array} applys - 应用列表
   */
  SETAPPLYS(state, applys) {
    sessionStorage.setItem('applys', JSON.stringify(applys))
    state.applys = applys
  },
  /**
   * @method 设置任务列表
   * @param {Object} tasks - 任务列表
   */
  SETTASKS(state, tasks) {
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
    state.tasks = tasks
  },
  /**
   * @method 设置渠道列表
   * @param {Array} channels - 渠道列表
   */
  SETCHANNELS(state, channels) {
    sessionStorage.setItem('channels', JSON.stringify(channels))
    state.channels = channels
  }
}

const actions = {
  // 获取国家列表
  async GetCountries({ commit }) {
    const res = await GetDictionaryList({ model: 'Countries' })
    commit('SETCOUNTRIES', res.data)
  },
  // 获取应用列表
  async GetApplys({ commit }) {
    const res = await GetDictionaryList({ model: 'Packages' })
    commit('SETAPPLYS', res.data)
  },
  // 获取任务列表
  async GetTasks({ commit }) {
    const res = await GetDictionaryList({
      model: 'Tasks',
      attribute: '_type'
    })
    commit('SETTASKS', res)
  },
  // 获取渠道列表
  async GetChannels({ commit }) {
    const res = await GetDictionaryList({
      model: 'PutWorkbench',
      attribute: '_platform'
    })
    commit('SETCHANNELS', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

