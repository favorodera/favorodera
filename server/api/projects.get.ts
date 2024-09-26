import { database } from "~/firebase/serverside";
import { Projects } from "~/utils/types";

export default defineEventHandler(async () => {
  const projectsSnapshot = await database
    .collection("portfoliodata")
    .doc("projects")
    .get();

  return {
    data: projectsSnapshot.data()?.projects as Projects,
    message: projectsSnapshot.data()?.projects 
      ? "Projects Fetched Successfully" 
      : "Error Fetching Projects",
  };
});
