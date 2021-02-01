// Import banner image for pages
import banner from '../../assets/banner.png'

// Import pages
import Home from '../../pages/Home'
import About from '../../pages/About'

// Export all routes
export default [
  {
    path: '/',
    component: Home,
    header: {
      tab: 'Home',
      title: 'Welcome to [SubSilence]',
      banner: banner
    }
  },
  {
    path: '/about',
    component: About,
    header: {
      tab: 'About',
      title: 'About [SubSilence]',
      banner: banner
    }
  }
]
