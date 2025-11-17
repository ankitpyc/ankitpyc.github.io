export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  data_science: Skill[];
  software_development: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}
