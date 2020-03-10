import { prisma } from '../../../generated/prisma-client';
import { BOARD_FRAGMENT } from '../../fragments';
export default {
	Query: {
		getBoards: async (_, __, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const {
				user: { id }
			} = request;
			try {
				return prisma
					.boards({
						where: {
							user: {
								id
							}
						}
					})
					.$fragment(BOARD_FRAGMENT);
			} catch (error) {
				console.log(error);
			}
		}
	}
};
