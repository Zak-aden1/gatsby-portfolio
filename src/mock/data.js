import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zak Aden',
  subtitle: 'Junior Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Determined to never stop learning, I stumbled across coding last year and have not looked back. ',
  paragraphTwo: 'Learning to code has been a difficult and arduous journey, yet a rewarding one. Being able to immerse myself in projects that push my problem-solving, organisational and analytical skills whilst partaking in the change that it brings. ',
  paragraphThree: 'I aspire to be a developer so that I may develop myself and help the world one line of code at a time. By joining Nology, this would enable me to further enhance my skills and better myself at what Im passionate about- and that is coding. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'punk-api.jpg',
    title: 'Punk-Api',
    info: "A React app to search and filter Brewdog's beers using the Punk API.",
    info2: 'JavaScript | React | Api | Firebase | Material UI',
    url: 'https://punk-api-auth.web.app',
    repo: 'https://github.com/Zak-aden1/punk-api-challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nologer.png',
    title: 'nologer (client project)',
    info: 'A Web App built for the purpose of students and teachers being able to see their schedule, courses and curriculum. ',
    info2: 'React | Firebase | SASS | Pair Programming',
    url: 'https://nology-login.web.app/',
    repo: 'https://github.com/nology-tech/nologer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'note.jpg',
    title: 'note project (full stack)',
    info: 'A Crud Web App which allows you to add or delete custom notes.',
    info2: 'React | Material UI | Java | MySql | Postman ',
    url: 'https://zak-aden1.github.io/note-project/',
    repo: 'https://github.com/Zak-aden1/note-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'word-hunt.jpg',
    title: 'Word Hunt',
    info: 'A Web App which Allows you to check the definition of any word in four different languages',
    info2: 'React | Material UI | API | SASS',
    url: 'https://zak-aden1.github.io/word-hunt/',
    repo: 'https://github.com/Zak-aden1/word-hunt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator.jpg',
    title: 'Calculator',
    info: 'Calculator which performs any calculations',
    info2: 'JavaScript | Cypress | SASS',
    url: 'https://zak-aden1.github.io/Calculator/',
    repo: 'https://github.com/Zak-aden1/Calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tic-tac-toe.jpg',
    title: 'tic-tac-toe',
    info: 'A tic tac toe game built with vanilla JavaScript',
    info2: 'JavaScript | SASS',
    url: 'https://zak-aden1.github.io/tic-tac-toe/',
    repo: 'https://github.com/Zak-aden1/tic-tac-toe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'morse-code.jpg',
    title: 'Morse Code',
    info: 'A Morse Code translator built with vanilla JavaScript',
    info2: 'JavaScript | SASS',
    url: 'https://zak-aden1.github.io/morse-code-translator/',
    repo: 'https://github.com/Zak-aden1/morse-code-translator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'please press the button below to contact me!',
  btn: 'Contact me',
  email: 's.aden159@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zak-aden-376777216/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Zak-aden1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
