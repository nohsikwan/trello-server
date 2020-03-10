import { prisma } from '../../../generated/prisma-client';

export default {
	Mutation: {
		deleteMe: async (_, __, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const {
				user: { id }
			} = request;
			try {
				await prisma.deleteUser({ id });
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		}
	}
};
