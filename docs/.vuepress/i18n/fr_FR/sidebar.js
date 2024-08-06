const support = {
  text: 'Support',
  children: [
    '/troubleshooting',
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
        '/get-started',
        '/uefi-passwords',
        '/winre-verification',
        '/winre',
        '/unlock-uefi'
      ],
    },
    support,
    site,
  ],
}