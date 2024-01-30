// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'megan0320', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Local Music Website - LocalLive',
          description:
            'Hub for exploring local events, venues, and reviews. ',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/megan0320/LocalLive',
        },
        {
          title: 'Census Data Visualization Web App',
          description:
            'Interactive web app unveiling US Census insights.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        },
        {
          title: 'Legacy Data Analysis Platform',
          description:
            'User-friendly patient data dashboard.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        },
        {
          title: 'Twitter Data Analysis on Russia-Ukraine War',
          description:
            'Twitter Data analysis for Russia-Ukraine war insights using LDA, LSA, & NMF. 15 words.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.computer.org/csdl/proceedings-article/bigdataservice/2023/337900a147/1Q5ptdtFpsI',
        },
        {
          title: 'Air Quality App - AirMaster',
          description:
            'Flutter app built air quality monitor with real-time alerts & personalized settings.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://apps.apple.com/nl/app/asuka-air-master/id1613902642',
        },
        {
          title: 'IoT Control Platform',
          description:
            'Remote factory safety platform, real-time data comms & live info dashboards (ESP32, Node-RED, Python).',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        },
        
      ],
    },
  },
  seo: {
    title: 'Portfolio of Megan Yu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'meganyingtzu',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://meganyingtzu-com.stackstaging.com/',
    phone: '',
    email: 'meganyingtzu@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1MDW7lXXvnZWrKMCzy2C3moDIpN1pfn6C/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   'Java',
   'R',
   'Python',
   'React.js',
   'Git',
   'Flutter',
   'Android',
   'JavaScript',
   'HTML/CSS',
   'C/C++',
   'MySQL',
   'Google Cloud Platform'
  ],
  experiences: [
    {
      company: 'Arista Networks',
      position: 'Software Engineer Intern',
      from: 'May 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.arista.com/en/',
    },
    {
      company: 'Asuka Autotronics Inc.',
      position: 'Software Engineer',
      from: 'October 2021',
      to: 'June 2022',
      companyLink: 'https://www.asuka-autotronics.com/',
    },
    {
      company: 'Dell Technologies',
      position: 'Software Engineer Intern',
      from: 'July 2021',
      to: 'September 2021',
      companyLink: 'https://www.dell.com/',
    },
    {
      company: 'Asuka Autotronics Inc.',
      position: 'Software Engineer',
      from: 'October 2021',
      to: 'June 2022',
      companyLink: 'https://www.asuka-autotronics.com/',
    },
  ],
  publication: [
    {
      name: 'Twitter Data Analysis on Russia-Ukraine War',
      body: 'Perceiving the Ukraine-Russia Conflict: Topic Modeling and Clustering on Twitter Data',
      year: 'September 2023',
      link: 'https://www.computer.org/csdl/proceedings-article/bigdataservice/2023/337900a147/1Q5ptdtFpsI',
    },
  ],
  educations: [
    {
      institution: 'Rensselaer Polytechnic Institute',
      degree: 'Master's, Information Science',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'National Chung Hsing University',
      degree: 'Bachelor's, Electrical Engineering',
      from: '2015',
      to: '2019',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
