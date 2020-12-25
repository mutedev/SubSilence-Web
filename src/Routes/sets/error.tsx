import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Error403 from '../../pages/Error/403'
import Error404 from '../../pages/Error/404'

const routes: Routes[] = [
  {
    path: '/error/403',
    component: Error403,
    header: {
      tab: '403',
      title: '[403]',
      banner: banner
    }
  },
  {
    path: '*',
    component: Error404,
    header: {
      tab: '404',
      title: '[404]',
      banner: banner
    }
  }
]

export default routes
