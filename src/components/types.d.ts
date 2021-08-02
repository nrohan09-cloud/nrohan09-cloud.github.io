import { DefaultTheme } from "styled-components";
export type ProjectType = {
  title: string;
  props: {
    name?: any;
    status: { color: string; id: string; name: string };
    association?: string;
    description?: { content: string; link: string | null };
  };
  links: {
    github?: string;
  };
  page?: any;
};

export interface IThemer {
  theme: DefaultTheme;
  Global: GlobalStyleComponent<{}, DefaultTheme>;
  toggle: () => void;
  dispatch: React.Dispatch<actionprops>;
}

export type general = {
  name: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
  resume: string;
  aboutme: string;
  subtitle: string;
};

export type experience = {
  role: string;
  description: string;
  links: Array<{ label: string; link: string }>;
  date: {
    start: string;
    end: string;
  };
  title: string;
};

export type project = {
  description: string;
  github: string;
  title: string;
  image?: string | null;
};

export type skill = {
  description?: string;
  title: string;
};

export type education = {
  date: {
    start: string;
    end: string;
  };
  description: string;
  subtitle: string;
  title: string;
};
export interface Rohan {
  general: general;
  experiences: experience[];
  projects: project[];
  educations: education[];
  skills: skill[];
  getProjectById: (id: string) => project | undefined;
  error: boolean;
}
