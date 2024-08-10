const support = {
  text: 'Support',
  children: [
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/dw3ZJ9u7WS'
    }
  ],
}

const site = {
  text: 'Site',
  children: [
    '/credits',
    '/donations',
    '/site-navigation',
  ],
}

module.exports = {
  '/': [
    {
      text: 'UnoGuide',
      children: [
        '/things-to-know',
        '/get-started',
        '/uefi-passwords',
        '/short-circuit',
        '/windows-reinstall',
        '/install-drivers'
      ],
    },
    support,
    site,
  ],
}