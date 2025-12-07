export interface Project {
  id: string;
  title: string;
  position: string;
  description: string;
  teamSize: number;
  technologies: string[];
  responsibilities: string[];
  link?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
}

export type Locale = 'en' | 'vi';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string[];
}

export type SkillCategory =
  | 'library'
  | 'framework'
  | 'language'
  | 'stateLibrary'
  | 'styleLibrary'
  | 'cloud'
  | 'tools'
  | 'certification';

export interface TranslationKeys {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    title: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
    skills: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}
