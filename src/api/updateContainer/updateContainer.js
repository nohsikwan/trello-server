import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    updateTextContainer: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, text } = args;

      try {
        await prisma.updateContainer({
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
