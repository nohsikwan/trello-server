import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		editContainer: (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { cardId, text } = args;
			try {
				return prisma.updateCard({
					where: {
						id: cardId
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
