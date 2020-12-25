// Import banner image for pages
import banner from '../../assets/banner.png'

// Import pages
import Error403 from '../../pages/Error/403'
import Error404 from '../../pages/Error/404'

// Export all routes
export default [
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
