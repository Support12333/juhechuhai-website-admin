import router from './router'
import getPageTitle from '@utils/get-page-title'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  next()
})

router.afterEach(() => {
  NProgress.done()
})
