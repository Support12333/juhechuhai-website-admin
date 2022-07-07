import fetch from '@server/index'

/**
 * @method 公用属性
 * @param {Object} params
 * @param {String} params.model - 模块 Countries国家，Packages应用包，Tasks任务，PutWorkbench投放工作台
 * @param {String} params.attribute - 属性（任务类型：_type，渠道：_platform）
 */
export const GetDictionaryList = params => fetch({
  url: 'common-attr',
  method: 'GET',
  params
})
