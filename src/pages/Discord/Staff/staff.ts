import type Staff from './interface'

const staff: Staff = {
  roles: [
    {
      id: 0,
      name: 'Owner',
      color: 'rgb(226, 92, 92)',
    },
    {
      id: 1,
      name: 'Administrator',
      color: 'rgb(238, 193, 109)',
    },
    {
      id: 2,
      name: 'Moderator',
      color: 'rgb(243, 243, 125)',
    },
    {
      id: 3,
      name: 'Developer',
      color: '#90FFDC',
    },
  ],
  users: [
    {
      roles: [0, 3],
      name: 'Myu',
      discordName: 'Myu#0001',
      quote: 'Nyan~',
      img:
        'https://cdn.discordapp.com/avatars/190486065512054786/aa6d0b7be6b7c2eb055588fd1073dd42.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [1],
      name: 'ItsTimZB',
      discordName: 'TimZB#6969',
      quote: 'Huts',
      img:
        'https://cdn.discordapp.com/avatars/263364989216096276/33235a79b569a62254aee0f4dadf14b2.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [1],
      name: 'YouYou-Chan',
      discordName: 'yoloyouri (aka Itsuki)#6711',
      quote: 'Traps are gay',
      img:
        'https://cdn.discordapp.com/avatars/260002038924967937/a_9e2a28c98b17cbacbbc4ba148bc2abc6.gif?size=1024',
      timezone: 'CET',
    },
    {
      roles: [1, 3],
      name: 'App',
      discordName: 'App2099#0109',
      quote: 'Nyaa~',
      img:
        'https://cdn.discordapp.com/avatars/344502606107770880/58e4541fc3c07b0e6c187a48b08c0d97.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [2],
      name: 'LightPug',
      discordName: 'Lightpug#1699',
      quote: 'They still haunt me',
      img:
        'https://cdn.discordapp.com/avatars/409665404726673409/a_2689233f83b125232ffaefc8b1f8cc3c.gif?size=1024',
      timezone: 'CET',
    },
    {
      roles: [2],
      name: 'Torch',
      discordName: 'Torch#0001',
      quote: '-',
      img:
        'https://cdn.discordapp.com/avatars/187775604706377729/a_bbec26bac10443f890906471057b4986.gif?size=1024',
      timezone: 'EST',
    },
    {
      roles: [2],
      name: 'Seelk',
      discordName: 'Seelk#1337',
      quote: 'Totally not a femboy',
      img:
        'https://cdn.discordapp.com/avatars/240986142940332033/d592b8bb24992892bae55798da9f6404.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [2],
      name: 'Polly',
      discordName: 'polly#2137',
      quote: '-',
      img:
        'https://cdn.discordapp.com/avatars/157587601266704384/778b80e0b576d4d5fe1579ec7dc7a1c7.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [2],
      name: 'Atsi',
      discordName: 'Atsi#6969',
      quote: '-',
      img:
        'https://cdn.discordapp.com/avatars/351535435010539521/9fcbec4ae8e599bc61d6d06f8cbe5ea2.png?size=1024',
      timezone: 'Unknown',
    },
    {
      roles: [2, 3],
      name: 'LuximusHunter',
      discordName: 'Hunter#2043',
      quote: 'Professional Potato',
      img:
        'https://cdn.discordapp.com/avatars/306692821358739456/618fd4904163383039921385859446ae.png?size=1024',
      timezone: 'CET',
    },
    {
      roles: [3],
      name: 'Swat',
      discordName: 'Swat#7165',
      quote: '.unmute .mute',
      img:
        'https://cdn.discordapp.com/avatars/168801348685398016/223c8a617bc995961a0c95f98ea62616.png?size=1024',
      timezone: 'CET',
    },
  ],
}

export default staff
