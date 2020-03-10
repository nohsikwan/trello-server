import { prisma } from '../../../generated/prisma-client';
export default {
	Query: {
		getMe: (_, __, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const {
				user: { id }
			} = request;

			try {
				return prisma.user({ id });
			} catch (error) {
				console.log(error);
			}
		}
	}
};
