import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		editContainer: (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { containerId, text } = args;
			try {
				return prisma.updateContainer({
					where: {
						id: containerId
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
