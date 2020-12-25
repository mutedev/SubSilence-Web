import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Home from '../../pages/Charmy/Main'
import Commands from '../../pages/Charmy/Commands'

const routes: Routes[] = [
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

export default routes
