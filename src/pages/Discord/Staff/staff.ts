import type Staff from './interface'

const staff: Staff = {
  roles: [
    {
      id: 0,
      name: 'Owner',
      color: 'rgb(226, 92, 92)'
    },
    {
      id: 1,
      name: 'Administrator',
      color: 'rgb(238, 193, 109)'
    },
    {
      id: 2,
      name: 'Moderator',
      color: 'rgb(243, 243, 125)'
    },
    {
      id: 3,
      name: 'Developer',
      color: '#90FFDC'
    }
  ],
  users: [
    {
      roles: [0, 3],
      name: 'Myu',
      discordName: 'Myu#0001',
      quote: 'Nyan~',
      img:
        'http://exia.subsilence.nl/subsilence/staff/myu.png',
      timezone: 'CET'
    },
    {
      roles: [1],
      name: 'ItsTimZB',
      discordName: 'TimZB#6969',
      quote: 'Huts',
      img:
        'http://exia.subsilence.nl/subsilence/staff/tim.png',
      timezone: 'CET'
    },
    {
      roles: [1],
      name: 'YouYou-Chan',
      discordName: 'yoloyouri (aka Itsuki)#6711',
      quote: 'Traps are gay',
      img:
        'http://exia.subsilence.nl/subsilence/staff/youri.gif',
      timezone: 'CET'
    },
    {
      roles: [1, 3],
      name: 'App',
      discordName: 'App2099#0109',
      quote: 'Nyaa~',
      img:
        'http://exia.subsilence.nl/subsilence/staff/app.png',
      timezone: 'CET'
    },
    {
      roles: [2],
      name: 'LightPug',
      discordName: 'Lightpug#1699',
      quote: 'They still haunt me',
      img:
        'http://exia.subsilence.nl/subsilence/staff/lightpug.png',
      timezone: 'CET'
    },
    {
      roles: [2],
      name: 'Torch',
      discordName: 'Torch#0001',
      quote: '-',
      img:
        'http://exia.subsilence.nl/subsilence/staff/torch.png',
      timezone: 'EST'
    },
    {
      roles: [2],
      name: 'Seelk',
      discordName: 'Seelk#1337',
      quote: 'Totally not a femboy',
      img:
        'http://exia.subsilence.nl/subsilence/staff/seelk.png',
      timezone: 'CET'
    },
    {
      roles: [2],
      name: 'Atsi',
      discordName: 'Atsi#6969',
      quote: '-',
      img:
        'http://exia.subsilence.nl/subsilence/staff/atsi.gif',
      timezone: 'Unknown'
    },
    {
      roles: [2, 3],
      name: 'LuximusHunter',
      discordName: 'LuximusHunter#2043',
      quote: 'Professional Potato',
      img:
        'http://exia.subsilence.nl/subsilence/staff/hunter.png',
      timezone: 'CET'
    },
    {
      roles: [3],
      name: 'Swat',
      discordName: 'Swat#7165',
      quote: '.unmute .mute',
      img:
        'http://exia.subsilence.nl/subsilence/staff/swat.png',
      timezone: 'CET'
    }
  ]
}

export default staff
