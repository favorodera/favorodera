import { database } from "~/firebase/serverside";
import { Projects } from "~/utils/types";

export default defineEventHandler(async (event) => {
  const { tag, projectName }: { tag: string; projectName: string } =
    getQuery(event);

  const projectsSnapshot = await database
    .collection("portfoliodata")
    .doc("projects")
    .get();

  const allProjects = projectsSnapshot.data()?.projects as Projects;

  if (tag) {
    const tagFilteredProjects = allProjects?.filter((project) =>
      project.tags?.includes(tag)
    );
    return {
      data: tagFilteredProjects,
      message:
        tagFilteredProjects.length > 0
          ? "Projects Fetched Successfully"
          : "No Projects Found with that tag",
    };
  }

  if (projectName) {
    const nameFilteredProject = allProjects?.find(
      (project) => project.name?.toLowerCase() === projectName?.toLowerCase()
    );
    return {
      data: nameFilteredProject ? [nameFilteredProject] : [],
      message: nameFilteredProject
        ? "Project Fetched Successfully"
        : "No Project Found with that name",
    };
  }

  // If no tag or projectName is provided, return all projects
  return {
    data: allProjects,
    message: allProjects
      ? "Projects Fetched Successfully"
      : "Error Fetching Projects",
  };
});
