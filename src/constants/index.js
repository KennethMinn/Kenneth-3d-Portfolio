import {
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
  nodejs,
  bootstrap,
  java,
  python,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mapty,
  cart,
  crownClothing,
  st,
  yma,
  nyi,
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
    title: 'Content Creator',
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
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
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
    name: 'java',
    icon: java,
  },
  {
    name: 'python',
    icon: python,
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
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
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
    company_name: 'Tesla',
    icon: tesla,
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
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Oct 2022 - May 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
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
      'I thought it was impossible to make a website as beautiful as our product, but Kenneth proved me wrong.',
    name: 'Shinn Thant',
    designation: 'CFO',
    company: 'Acme Co',
    image: st,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kenneth does.",
    name: 'Ye Man Aung',
    designation: 'COO',
    company: 'DEF Corp',
    image: yma,
  },
  {
    testimonial:
      "After Kenneth optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Nyi Nyi',
    designation: 'CTO',
    company: '456 Enterprises',
    image: nyi,
  },
];

const projects = [
  {
    name: 'Crown-clothing',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
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
    name: 'Cart-management',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cart,
    source_code_link: 'https://github.com/KennethMinn/cart-management-react',
    project_link:
      'https://64533df04fa0fa470b745f25--dynamic-phoenix-40d970.netlify.app/',
  },
  {
    name: 'Mapty',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
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

export { services, technologies, experiences, testimonials, projects };
