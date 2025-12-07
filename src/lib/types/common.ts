export interface Project {
  key: string;
  link: string;
}

export type Locale = 'en' | 'vi';

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
