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

type Education = {
  course: string;
  institute: string;
  institute_url: string;
  start_date: string;
  end_date:string
  description: string;
}

type Educations = Education[]

export type { Project, Projects,Education,Educations };
