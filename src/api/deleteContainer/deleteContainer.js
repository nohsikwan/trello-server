import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		deleteContainer: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { containerId } = args;
			try {
				await prisma.deleteContainer({ id: containerId });
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		}
	}
};
