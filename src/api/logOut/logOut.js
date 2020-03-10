import { signOutToken } from '../../utils';
export default {
	Query: {
		logOut: async (_, __, { request, isAuthenticated }) => {
			isAuthenticated(request);
			const {
				user: { id }
			} = request;
			return signOutToken(id);
		}
	}
};
