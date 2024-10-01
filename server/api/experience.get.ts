import { database } from "~/firebase/serverside";
import { Experiences } from "~/utils/types";

export default defineEventHandler(async () => {
  const projectsSnapshot = await database
    .collection("portfoliodata")
    .doc("experiences")
    .get();

  return {
    data: projectsSnapshot.data()?.experiences as Experiences,
    message: projectsSnapshot.data()?.experiences
      ? "Experiences Fetched Successfully"
      : "Error Fetching Experiences",
  };
});
