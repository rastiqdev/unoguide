const { locales, themeConfigLocales } = require("./i18n")
const { emiylTheme } = require('../../emiyl-theme-2')

module.exports = {
  locales: locales,
  
  theme: emiylTheme({
    repo: 'rastiqdev/unoguide',
    selectLanguageText: '<i class="fas fa-globe"></i>',
    locales: themeConfigLocales
  }),
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
  ],

  shouldPrefetch: true,
}
