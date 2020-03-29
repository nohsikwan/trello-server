import { prisma } from "../../../generated/prisma-client";
import { BOARD_FRAGMENT } from "../../fragments";
export default {
  Query: {
    getBoard: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      try {
        return prisma.board({ id }).$fragment(BOARD_FRAGMENT);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
