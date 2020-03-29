import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    updateTextBoard: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, text } = args;

      try {
        await prisma.updateBoard({
          where: {
            id
          },
          data: {
            text
          }
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
