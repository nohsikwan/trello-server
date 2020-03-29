import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    updateNumCard: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { createdAt1, createdAt2, cardId1, cardId2 } = args;

      try {
        await prisma.updateCard({
          where: {
            id: cardId1
          },
          data: {
            created: createdAt2
          }
        });

        await prisma.updateCard({
          where: {
            id: cardId2
          },
          data: {
            created: createdAt1
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
