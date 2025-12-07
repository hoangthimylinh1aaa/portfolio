import type { Project } from '$lib/types/common';

export const projectsData: Project[] = [
  {
    id: 'jusskin',
    title: 'JUSSKIN',
    position: 'Front-end Developer',
    description:
      'JUSSKIN is a React Native mobile application tailored for dermatologists and medical professionals. It enables capturing or uploading patient skin images for accurate assessment and analysis. The app maintains detailed patient records, including treatment history and prescriptions.',
    teamSize: 4,
    technologies: ['React Native', 'StyleSheet', 'MobX', 'TensorFlow'],
    responsibilities: [
      'Build module management (module related to form, reuse components, ... )',
      'Apply camera AI from TensorFlow to detect a part on body',
      'Convert Figma design to the React Native components',
      'Connect with API to get, add, update and delete item in database (patient, session, lesion, ...)',
    ],
    link: 'https://apps.apple.com/us/app/just-skin/id6748404575',
    image: '/images/projects/jusskin.jpg',
  },
  {
    id: 'bht',
    title: 'BHT',
    position: 'Front-end Developer',
    description:
      'Developed high-quality, photorealistic images and videos for the architecture and luxury real estate industries. Leveraged advanced 3D technologies to create detailed models and apply sophisticated lighting and material effects.',
    teamSize: 6,
    technologies: ['Three. js', 'React. js', 'Redux', 'Redux Toolkit', 'Tailwind CSS'],
    responsibilities: [
      'Build module management (CMS gallery, unit customer, configuration, setting Marzipano in admin side)',
      'Use a socket connection to enable real-time synchronization between two devices logged into the same account',
      'Convert Figma design to the React.js components',
      'Connect with API to get, add, update and delete item in database (user, amenity, ... )',
      'Collaborate to review and improve code quality',
      'Refactor code (convert SCSS to Tailwind)',
    ],
    link: 'https://app.rcresidencesbaku.com',
    image: '/images/projects/bht.jpg',
  },
  {
    id: 'nvp',
    title: 'NVP',
    position: 'Front-end Developer',
    description:
      'This project is designed for doctors, patients, admins, and super admins, with each role having specific permissions. It is owned by a hospital specializing in autism-related issues. The platform allows users to book appointments through an integrated calendar system and Zoom.',
    teamSize: 6,
    technologies: ['Next.js', 'Redux', 'Redux Toolkit Query', 'Tailwind CSS', 'TypeScript'],
    responsibilities: [
      'Build calendar component',
      'Translate the Figma design into Next.js components',
      'Refactor the code to create reusable components and optimize unnecessary re-renders',
      'Enhance the UI and UX by implementing hover effects, skeleton loaders, and providing visual feedback',
      'Integrate with the API to retrieve, add, modify, and remove items from the database',
      'Review code',
    ],
    link: 'https://nvp.testbox.com.au',
    image: '/images/projects/nvp.jpg',
  },
  {
    id: 'assa',
    title: 'ASSA',
    position: 'Front-end Developer',
    description:
      'The ASSA platform supports workplace safety and compliance by managing employee induction, contractor onboarding, and incident reporting. It streamlines processes like creating custom training courses, uploading employee data in bulk, and generating compliance reports.',
    teamSize: 5,
    technologies: [
      'Next.js',
      'Redux',
      'Redux Toolkit Query',
      'Tailwind CSS',
      'TanStack Table',
      'TypeScript',
    ],
    responsibilities: [
      'Authentication (login, forgot password, handle expire token)',
      'Convert Figma design to the Next.js components',
      'Refactor code (build reuse component, optimize unnecessary rendering)',
      'Improve UI, UX (event hover, skeleton, wait when trigger action call API)',
      'Connect with API to get, add, update and delete item in database',
      'Work together to evaluate and enhance code quality, focusing on readability, functionality, and long-term maintainability',
      'Setting Husky, ESLint, Prettier',
    ],
    link: 'https://assa.testbox.com.au/',
    image: '/images/projects/assa.jpg',
  },
  {
    id: 'maker',
    title: 'MAKER',
    position: 'Front-end Developer',
    description:
      'Redbrick Makers offers a comprehensive platform for coding education, designed for students aged 6 to 18. It provides a project-based learning curriculum, including courses in block coding, JavaScript, Python, and AI.  The platform features a software builder with over 10,000 assets for students to create their own software, along with a robust learning management system (LMS) for educators to track progress and manage classes.',
    teamSize: 10,
    technologies: ['React. js', 'React Query', 'Tailwind CSS', 'TypeScript'],
    responsibilities: [
      'Convert Figma design to the Next.js components',
      'Handle feature (buy, sell, invite user, o2 auth, play and learn...  related to class)',
      'Mentor for new members',
      'Review code',
    ],
    link: 'https://redbrickmakers.com',
    image: '/images/projects/maker.jpg',
  },
  {
    id: 'ivfmd-chat',
    title: 'IVFMD CHAT',
    position: 'Front-end Developer',
    description:
      "The IVFMD Family application offers an integrated chat feature designed for seamless communication between patients and the clinic's support team, much like Zalo's user experience. This chat function allows users to schedule appointments, discuss treatment plans, and ask questions directly, enhancing convenience and interaction during the fertility treatment process.",
    teamSize: 10,
    technologies: ['React. js', 'Style Components', 'Redux', 'Socket.io'],
    responsibilities: [
      'Input chat (mention user, animation when wait)',
      'Conversation (deleted, edit, hidden message, style standard chat form)',
    ],
    link: '#',
    image: '/images/projects/ivfmd.jpg',
  },
];
