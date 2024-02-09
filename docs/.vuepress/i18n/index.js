const config = {
	fr_FR: {
		path: '/',
		content: require('./fr_FR'),
	}
}

var localePath = {}
var locales = {}
var themeConfigLocales = {}
var searchLocales = {}

for (const i in config) localePath[i] = config[i].path
for (const i in localePath) {
  locales[localePath[i]] = config[i].content.locales,
  themeConfigLocales[localePath[i]] = config[i].content.themeConfig,
  searchLocales[localePath[i]] = { placeholder: config[i].content.search, }
}

module.exports = {
	localePath: localePath,
	locales: locales,
	themeConfigLocales: themeConfigLocales,
	searchLocales: searchLocales,
};
