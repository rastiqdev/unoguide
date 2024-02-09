module.exports = {
  search: 'Chercher',
  
  locales: {
    lang: 'fr-FR',
    title: 'UnoGuide',
    description: 'Un guide pour jailbreak votre Unowhy Y13.',
    discordNoticeText: "Si vous avez besoin de plus d'aide, demandez sur le [serveur Discord](https://discord.gg/dw3ZJ9u7WS) de la Unocorp pour de l'assistance.",
  },
  
  themeConfig: {
  	selectLanguageName: "Français",
  	backToHome: "Retour à l'accueil",
  	contributorsText: "Contributeurs",
  	editLinkText: "Modifier cette page",
  	lastUpdatedText: "Dernière mise à jour",
  	openInNewWindow: "Ouvrir dans une nouvelle fenêtre",
  	selectLanguageAriaLabel: "Sélectionner la langue",
  	toggleDarkMode: "(dés)activer le mode sombre",
  	toggleSidebar: "(dés)activer la sidebar",
        
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};