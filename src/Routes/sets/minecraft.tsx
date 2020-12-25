// Import banner image for pages
import banner from '../../assets/banner.png'

// Import pages
import Home from '../../pages/Minecraft/Main'
import Rules from '../../pages/Minecraft/Rules'
import MCMap from '../../pages/Minecraft/Map'
import Clans from '../../pages/Minecraft/Clans'

// Export all routes
export default [
  {
    path: '/minecraft',
    component: Home,
    header: {
      tab: 'Minecraft',
      title: 'SubSilence [Minecraft]',
      banner: banner
    }
  },
  {
    path: '/minecraft/rules',
    component: Rules,
    header: {
      tab: 'Minecraft Rules',
      title: 'Minecraft [Rules]',
      banner: banner
    }
  },
  {
    path: '/minecraft/map',
    component: MCMap,
    header: {
      tab: 'Minecraft Map',
      title: 'Minecraft [Map]',
      banner: banner
    }
  },
  {
    path: '/minecraft/clans',
    component: Clans,
    header: {
      tab: 'Minecraft Clans',
      title: 'Server [Clans]',
      banner: banner
    }
  }
]
