import { database } from "~/firebase/serverside";
import { Educations } from "~/utils/types";

export default defineEventHandler(async () => {
  const projectsSnapshot = await database
    .collection("portfoliodata")
    .doc("educations")
    .get();

  return {
    data: projectsSnapshot.data()?.educations as Educations,
    message: projectsSnapshot.data()?.educations
      ? "Educations Fetched Successfully"
      : "Error Fetching Educations",
  };
});
