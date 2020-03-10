import { prisma } from '../../../generated/prisma-client';
import crypto from 'crypto';
export default {
	Mutation: {
		editMe: async (_, args, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const { bio, password } = args;
			const {
				user: { id }
			} = request;
			const shasum = crypto.createHash('sha1');
			shasum.update(password);
			const output = shasum.digest('hex');
			try {
				return prisma.updateUser({
					where: {
						id
					},
					data: {
						password: output,
						bio
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
