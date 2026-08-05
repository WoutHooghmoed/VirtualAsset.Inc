/*
  SITE CONFIGURATION
  Edit this file to change the homepage wording and company details. No HTML edits needed.
*/
window.SITE_CONFIG = {
  companyName: 'Virtual Asset.Inc',
  home: {
    eyebrow: 'Investments',
    heading: 'Providing funds<br>developers <em>need.</em>',
    intro: 'Virtual Asset.Inc Provides funds for new or experienced developers.',
    primaryCta: 'Pitch your game',
    secondaryCta: 'Explore portfolio'
  },
  labels: {
    visits: 'Game visits',
    playing: 'Players online',
    games: 'Games invested in'
  },
  /* Every visible text item can be changed below. HTML is allowed for line breaks/emphasis. */
  copy: {
    shared: {
      'nav a:nth-child(1)': 'Home', 'nav a:nth-child(2)': 'Games', 'nav a:nth-child(3)': 'Who we are', 'nav a:nth-child(4)': 'Contact',
      'footer p:nth-of-type(1)': 'Building the next generation of Roblox.'
    },
    'games.html': {
      '.page-intro .eyebrow': 'Portfolio / Roblox data', '.page-intro h1': 'Games that<br>hold attention.', '.page-intro p:last-child': 'Verified Roblox statistics from the games we back, updated automatically.',
      '#refresh-portfolio': 'Check for update ↻', '.data-note': 'Visit totals and CCU are sourced from Roblox’s public game-details API. On GitHub Pages, the data refreshes automatically every 10 minutes.'
    },
    'about.html': {
      '.page-intro .eyebrow': 'Who we are', '.page-intro h1': 'Operators with<br>a player’s <em>eye.</em>', '.page-intro p:last-child': 'We invest in Roblox teams with a strong point of view—and stay close enough to be genuinely useful.',
      '.split .eyebrow': 'Our thesis', '.split h2': 'Games are living products.', '.large-copy': 'The best Roblox experiences earn a place in players’ routines. We look for early signs of that pull: a clear social loop, an opinionated world, and a team that listens closely to its community.'
    },
    'contact.html': {
      '.contact .eyebrow': 'Start a conversation', '.contact h1': 'Let’s build<br>something that <em>lasts.</em>', '.contact > div > p:not(.eyebrow)': 'Tell us about your studio, your game, and the moment you’re at.', '.email-link': 'hello@virtualasset.inc ↗',
      '.form-note': 'This opens your email app. We do not collect or store form data on this website.'
    }
  }
};
