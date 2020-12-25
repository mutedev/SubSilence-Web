// Import banner image for pages
import banner from '../../assets/banner.png'

// Import pages
import Home from '../../pages/Charmy/Main'
import Commands from '../../pages/Charmy/Commands'

// Export all routes
export default [
  {
    path: '/charmy',
    component: Home,
    header: {
      tab: 'Charmy',
      title: 'Meet [Charmy]',
      banner: banner
    }
  },
  {
    path: '/charmy/commands',
    component: Commands,
    header: {
      tab: 'Charmy Commands',
      title: '[Charmy] Commands',
      banner: banner
    }
  },
  {
    path: '/charmy/commands/:url',
    component: Commands,
    header: {
      tab: 'Charmy Commands',
      title: '[Charmy] Commands',
      banner: banner
    }
  }
]
