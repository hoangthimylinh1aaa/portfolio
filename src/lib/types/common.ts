export interface Project {
  id: string;
  teamSize: number;
  technologies: string[]; // keep primary technologies here for quick access
  link?: string;
  image?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
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
