import { data } from "../../data.js";

export const programResolvers = {
  Query: {
    programs: () => data.programs,
  },
}
