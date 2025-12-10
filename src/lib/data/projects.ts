import type { Project } from '$lib/types/common';
import justskinLogo from '$lib/assets/images/justskin-logo.png';
import nvpLogo from '$lib/assets/images/nvp_logo.png';
import bhtImage from '$lib/assets/images/bht.png';
import assaImage from '$lib/assets/images/assa.png';
import markerImage from '$lib/assets/images/marker.webp';
import ivfmdImage from '$lib/assets/images/ivfmd.webp';

export const projectsData: Project[] = [
  {
    id: 'justSkin',
    teamSize: 4,
    technologies: ['React Native', 'StyleSheet', 'MobX', 'TensorFlow'],
    link: 'https://apps.apple.com/us/app/just-skin/id6748404575',
    image: justskinLogo,
  },
  {
    id: 'bht',
    teamSize: 6,
    technologies: ['Three.js', 'React.js', 'Redux', 'Redux Toolkit', 'Tailwind CSS'],
    link: 'https://app.rcresidencesbaku.com',
    image: bhtImage,
  },
  {
    id: 'nvp',
    teamSize: 6,
    technologies: ['Next.js', 'Redux', 'Redux Toolkit Query', 'Tailwind CSS', 'TypeScript'],
    link: 'https://nvp.testbox.com.au',
    image: nvpLogo,
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
    image: assaImage,
  },
  {
    id: 'maker',
    teamSize: 10,
    technologies: ['React.js', 'React Query', 'Tailwind CSS', 'TypeScript'],
    link: 'https://redbrickmakers.com',
    image: markerImage,
  },
  {
    id: 'ivfmd-chat',
    teamSize: 10,
    technologies: ['React.js', 'Styled Components', 'Redux', 'Socket.io'],
    link: '#',
    image: ivfmdImage,
  },
];
