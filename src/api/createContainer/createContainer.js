import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		createContainer: (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { text, boardId } = args;

			try {
				return prisma.createContainer({
					text,
					board: {
						connect: {
							id: boardId
						}
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
