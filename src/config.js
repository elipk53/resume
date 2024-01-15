module.exports = {
  siteTitle: 'Eli Perkins | Software Developer | Frontend Developer',
  siteDescription:
    'Eli Perkins is a Software Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Eli Perkins, Software developer, Software engineer, Frontend developer, Web developer',
  siteUrl: 'https://brandonbyrne.net/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Eli Perkins',
  location: 'Thousnad Oaks, CA, USA',
  email: 'perkinseli53@gmail.com',
  github: 'https://github.com/elipk53',
  // twitterHandle: '@elipk53',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/elipk53',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/eliperkins53/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/EliPerkins4021',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
