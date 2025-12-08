import type { Project } from '$lib/types/common';

export const projectsData: Project[] = [
  {
    id: 'justSkin',
    teamSize: 4,
    technologies: ['React Native', 'StyleSheet', 'MobX', 'TensorFlow'],
    link: 'https://apps.apple.com/us/app/just-skin/id6748404575',
    image: '/src/lib/assets/images/justskin-logo.png',
  },
  {
    id: 'bht',
    teamSize: 6,
    technologies: ['Three.js', 'React.js', 'Redux', 'Redux Toolkit', 'Tailwind CSS'],
    link: 'https://app.rcresidencesbaku.com',
    image: '/src/lib/assets/images/bht.png',
  },
  {
    id: 'nvp',
    teamSize: 6,
    technologies: ['Next.js', 'Redux', 'Redux Toolkit Query', 'Tailwind CSS', 'TypeScript'],
    link: 'https://nvp.testbox.com.au',
    image: '/src/lib/assets/images/nvp_logo.png',
  },
  {
    id: 'assa',
    teamSize: 5,
    technologies: [
      'Next.js',
      'Redux',
      'Redux Toolkit Query',
      'Tailwind CSS',
      'TanStack Table',
      'TypeScript',
    ],
    link: 'https://assa.testbox.com.au/',
    image: '/src/lib/assets/images/assa.png',
  },
  {
    id: 'maker',
    teamSize: 10,
    technologies: ['React.js', 'React Query', 'Tailwind CSS', 'TypeScript'],
    link: 'https://redbrickmakers.com',
    image: '/src/lib/assets/images/marker.webp',
  },
  {
    id: 'ivfmd-chat',
    teamSize: 10,
    technologies: ['React.js', 'Styled Components', 'Redux', 'Socket.io'],
    link: '#',
    image: '/src/lib/assets/images/ivfmd.webp',
  },
];
