type Project = {
  image: string;
  name: string;
  description: string;
  repository: string;
  technologies: string[];
  status: string;
  created: string;
  link: string;
};

type Projects = Project[];

export type { Project, Projects }
