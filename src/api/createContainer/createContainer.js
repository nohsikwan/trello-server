import { prisma } from "../../../generated/prisma-client";
import { CONTAINER_FRAGMENT } from "../../fragments";
export default {
  Mutation: {
    createContainer: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { text, boardId } = args;

      try {
        return prisma
          .createContainer({
            text,
            board: {
              connect: {
                id: boardId
              }
            }
          })
          .$fragment(CONTAINER_FRAGMENT);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
