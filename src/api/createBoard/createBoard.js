import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    createBoard: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { text, color } = args;
      const {
        user: { id }
      } = request;

      try {
        return prisma.createBoard({
          text,
          color,
          user: {
            connect: {
              id
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
