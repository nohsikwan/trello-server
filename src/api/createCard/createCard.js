import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    createCard: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { text, containerId } = args;

      try {
        return prisma.createCard({
          text,
          created:
            String(new Date())
              .replace(/[^0-9]/g, "")
              .slice(0, 2) +
            String(new Date())
              .replace(/[^0-9]/g, "")
              .slice(6, 13),
          container: {
            connect: {
              id: containerId
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
