import { prisma } from '../../../generated/prisma-client';
import crypto from 'crypto';
export default {
	Mutation: {
		signUp: (_, args) => {
			const { email, password, name, bio = '' } = args;
			const shasum = crypto.createHash('sha1');
			shasum.update(password);
			const output = shasum.digest('hex');

			try {
				return prisma.createUser({
					name,
					email,
					password: output,
					bio
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
