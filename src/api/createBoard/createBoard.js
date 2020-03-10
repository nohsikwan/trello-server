import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		createBoard: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { text } = args;
			const {
				user: { id }
			} = request;
			try {
				return prisma.createBoard({
					text,
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
