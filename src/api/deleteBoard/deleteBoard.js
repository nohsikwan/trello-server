import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		deleteBoard: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { boardId } = args;
			try {
				await prisma.deleteBoard({ id: boardId });
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		}
	}
};
