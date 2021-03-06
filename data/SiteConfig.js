const config = {
  siteTitle: 'KD',
  siteTitleShort: 'KD',
  siteTitleAlt: 'KD',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://msft.netlify.com/',
  repo: 'https://github.com/dkarthe/taniarascia',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Hi I am KD, the author of this blog, the page you're currently previewing. I hope you like it!',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-129506902-1',
  disqusShortname: 'ooioo',
  postDefaultCategoryID: 'Tech',
  userName: 'Tania',
  userEmail: 'kd@outlook.at',
  userTwitter: 'dkaarthik',
  userLocation: 'TN, IN',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the web.',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Newsletter',
      link: '/newsletter/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
