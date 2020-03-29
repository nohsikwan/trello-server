import { prisma } from "../../../../generated/prisma-client";
import { BOARD_FRAGMENT } from "../../../fragments";
export default {
  Subscription: {
    subscriptionBoard: {
      subscribe: (_, args) => {
        const { email } = args;
        return prisma.$subscribe
          .board({
            AND: [
              { mutation_in: "CREATED" },
              {
                node: {
                  user: {
                    email
                  }
                }
              }
            ]
          })
          .node()
          .$fragment(BOARD_FRAGMENT);
      },
      resolve: payload => payload
    }
  }
};
