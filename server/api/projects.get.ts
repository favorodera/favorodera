import { database } from "~/firebase/serverside";
import { Projects } from "~/utils/types";

export default defineEventHandler(async () => {

    const projectsSnapshot = await database
      .collection("portfoliodata")
      .doc("projects")
      .get();

    return {
      data: projectsSnapshot.data()?.projects as unknown as Projects | undefined,
      message: "Projects Fetched Successfully" || "Error Fetching Projects",
    };
  
});
