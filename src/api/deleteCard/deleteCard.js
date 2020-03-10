import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		deleteCard: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { cardId } = args;
			try {
				await prisma.deleteCard({ id: cardId });
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		}
	}
};
