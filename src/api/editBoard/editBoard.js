import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		editBoard: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { boardId, text } = args;

			try {
				return prisma.updateBoard({
					where: {
						id: boardId
					},
					data: {
						text
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
