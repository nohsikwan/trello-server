import { prisma } from "../../../generated/prisma-client";
import crypto from "crypto";
export default {
  Mutation: {
    editMe: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { bio, email, name } = args;
      const {
        user: { id }
      } = request;

      try {
        await prisma.updateUser({
          where: {
            id
          },
          data: {
            name,
            email,
            bio
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
