import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		createCard: (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { text, containerId } = args;

			try {
				return prisma.createCard({
					text,
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
