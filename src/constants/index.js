import {
  ecommerce,
  gym,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  sass,
  // nodejs,
  bootstrap,
  java,
  python,
  // mongodb,
  git,
  figma,
  // docker,
  // meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  mapty,
  // cart,
  crownClothing,
  dashboard,
  st,
  yma,
  nyi,
  car_showcase,
  php,
  laravel,
  mysql,
  next,
  bankist,
  pig,
  guess,
  nextjs,
  laravel_transparent,
  prisma_ecommerce,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Backend Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  // {
  //   name: 'Bootstrap',
  //   icon: bootstrap,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'nextJs',
    icon: next,
  },
  {
    name: 'laravel',
    icon: laravel,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    // company_name: 'Starbucks',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'January 2023 - May 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Developer',
    // company_name: 'Tesla',
    icon: nextjs,
    iconBg: '#E6DEDD',
    date: 'Oct 2022 - May 2023',
    points: [
      'Developing specialize in creating the visual and interactive aspects of websites and applications that users see and interact with.',
      'By using HTML, CSS, and JavaScript to build user interfaces and ensure that they are responsive, intuitive, and accessible on various devices.',
      'Implementing responsive design and ensuring cross-browser compatibility.Frontend developers collaborate with designers and backend developers for a seamless integration of the frontend and backend.',
      'Continuously learn and adapt to stay up-to-date with the latest technologies and trends in the field.',
    ],
  },
  {
    title: 'Backend Developer',
    // company_name: 'Shopify',
    icon: laravel_transparent,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - May 2023',
    points: [
      'Proficient in Laravel backend development, I excel in crafting scalable web solutions.',
      'Expertise in PHP and Laravel ensures secure, efficient systems',
      'Specialize in designing databases and APIs, prioritizing user experience. ',
      'My dedication lies in crafting maintainable and robust applications, consistently delivering client satisfaction.',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'Kenneth possesses excellent problem-solving skills. He approaches challenges with creativity and a can-do attitude.',
    name: 'Shinn Thant',
    designation: 'junior developer',
    company: 'Xsphere',
    image: st,
  },
  {
    testimonial:
      "Kenneth's passion for staying up-to-date with industry trends and technologies is evident in the continuous improvement of their work.",
    name: 'Ye Man Aung',
    designation: 'Software developer',
    company: 'CodeLab',
    image: yma,
  },
  {
    testimonial:
      'Kenneth is a highly motivated fullstack developer with a passion for creating visually appealing and user-friendly web applications',
    name: 'Nyi Nyi',
    designation: 'A friend',
    company: 'Kenneth',
    image: nyi,
  },
];
const mini_projects = [
  {
    name: 'Guess My Number Game',
    description:
      'Guess the Random Number is an engaging game where players use their wits to accurately predict a randomly generated number.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JS',
        color: 'pink-text-gradient',
      },
    ],
    image: guess,
    source_code_link: 'https://github.com/KennethMinn/Guess-my-number',
    project_link: 'https://tiny-wisp-87610b.netlify.app/',
  },
  {
    name: 'dice Game',
    description:
      'In this thrilling two-player dice game, race to reach the target number first to claim victory in a game of chance and strategy.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JS',
        color: 'pink-text-gradient',
      },
    ],
    image: pig,
    source_code_link:
      'https://github.com/KennethMinn/pig-game-two-players-can-play-',
    project_link: 'https://sensational-platypus-e5598f.netlify.app/',
  },
  {
    name: 'Bankist Portfolio',
    description:
      'A Bankist Portfolio is a diversified investment collection with a focus on stability and growth, tailored to your financial goals.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JS',
        color: 'pink-text-gradient',
      },
    ],
    image: bankist,
    source_code_link: 'https://github.com/KennethMinn/Bankist-Portfolio',
    project_link: 'https://illustrious-jelly-7c53d0.netlify.app/',
  },
  {
    name: 'Mapty',
    description:
      ' A user-friendly fitness app utilizing GPS to track outdoor activities, enabling users to log workouts, set goals, and visualize progress on interactive maps for a rewarding and immersive fitness experience.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'geolocation',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: mapty,
    source_code_link: 'https://github.com/KennethMinn/Mapty-App',
    project_link: 'https://leafy-moxie-ba2bf4.netlify.app',
  },
];

const main_projects = [
  {
    name: 'Crown-clothing',
    description:
      'The online marketplace where consumers and businesses interact, offering a wide range of products and services, enabling convenient shopping and global accessibility.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: crownClothing,
    source_code_link: 'https://github.com/KennethMinn/crown-clothing-project',
    project_link: 'https://crown-clothing-project.netlify.app/',
  },
  {
    name: 'Dashboard',
    description:
      'This comprehensive Ecommerce Dashboard features pages for Orders, Employees, and Customers, along with versatile apps and a variety of charts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'syncfusion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link: 'https://github.com/KennethMinn/dashboard',
    project_link: 'https://kenneth-dashboard.netlify.app',
  },
  {
    name: 'Ecommerce',
    description:
      'The online marketplace where consumers and businesses interact, offering a wide range of products and services, enabling convenient shopping and global accessibility.',
    tags: [
      {
        name: 'NextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Shadcn',
        color: 'pink-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
    ],

    image: prisma_ecommerce,
    source_code_link: 'https://github.com/KennethMinn/prisma-server_actions',
    project_link: 'https://prisma-server-actions-ashy.vercel.app/',
  },
  {
    name: 'fitness-app',
    description:
      'A holistic approach to physical well-being encompassing exercise, nutrition, and lifestyle choices, aimed at improving strength, endurance, flexibility, and overall health through various activities and programs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      // {
      //   name: 'geolocation',
      //   color: 'green-text-gradient',
      // },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    image: gym,
    source_code_link: 'https://github.com/KennethMinn/fitness-app',
    project_link: 'https://kenneth-fitness-app.netlify.app/',
  },
  {
    name: 'car_showcase',
    description:
      'Experience luxury and performance with our sleek, high-tech sports car. Precision engineering, cutting-edge technology, and stunning design await you.',
    tags: [
      {
        name: 'nextJs',
        color: 'green-text-gradient',
      },
      {
        name: 'headlessUi',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: car_showcase,
    source_code_link: 'https://github.com/KennethMinn/car_showcase_NextJs',
    project_link: 'https://cars-showcase.netlify.app/',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  main_projects,
  mini_projects,
};
