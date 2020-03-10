import { prisma } from '../../../generated/prisma-client';
import { generateToken } from '../../utils';
import crypto from 'crypto';
export default {
	Query: {
		logIn: async (_, args) => {
			const { email, password } = args;

			const shasum = crypto.createHash('sha1');
			shasum.update(password);
			const output = shasum.digest('hex');
			try {
				const user = await prisma.user({ email });
				if (user.password === output) {
					return generateToken(user.id);
				} else {
					throw new Error('회원정보가 틀립니다');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}
};
