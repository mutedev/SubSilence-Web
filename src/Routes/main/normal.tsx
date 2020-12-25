import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import main pages
import Home from '../../pages/Home'
import About from '../../pages/About'

// Import other routes
import discord from '../sets/discord'
import charmy from '../sets/charmy'
import minecraft from '../sets/minecraft'
import error from '../sets/error'

let routes: Routes[] = [
  // Main routes
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
  },

  // Imported routes
  ...discord,
  ...charmy,
  ...minecraft,
  ...error
]

export default routes
