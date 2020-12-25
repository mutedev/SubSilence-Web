// Import banner image for pages
import banner from '../../assets/banner.png'

// Import pages
import Home from '../../pages/Discord/Main'
import Rules from '../../pages/Discord/Rules'
import Staff from '../../pages/Discord/Staff'
import Partners from '../../pages/Discord/Partners'
import Roles from '../../pages/Discord/Roles'
import Verification from '../../pages/Discord/Verification'

// Export all routes
export default [
  {
    path: '/discord',
    component: Home,
    header: {
      tab: 'Discord',
      title: 'SubSilence [Discord]',
      banner: banner
    }
  },
  {
    path: '/discord/rules',
    component: Rules,
    header: {
      tab: 'Discord Rules',
      title: 'Discord [Rules]',
      banner: banner
    }
  },
  {
    path: '/discord/staff',
    component: Staff,
    header: {
      tab: 'Discord Staff',
      title: 'Discord [Staff]',
      banner: banner
    }
  },
  {
    path: '/discord/partners',
    component: Partners,
    header: {
      tab: 'Discord Partners',
      title: 'Discord [Partners]',
      banner: banner
    }
  },
  {
    path: '/discord/roles',
    component: Roles,
    header: {
      tab: 'Discord Roles',
      title: 'Discord [Roles]',
      banner: banner
    }
  },
  {
    path: '/discord/verify',
    component: Verification,
    header: {
      tab: 'Discord Verification',
      title: 'Discord [Verification]',
      banner: banner
    }
  }
]
