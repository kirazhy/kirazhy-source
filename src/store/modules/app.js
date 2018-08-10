import {
	store
} from 'const/store';

const app = {
	state: {
		isNavExpand: false,
	},
	mutations: {
		[store.mutation.TOGGLE_NAV]: (state, isNavExpand) => {
			state.isNavExpand = isNavExpand;
		}
	},
	actions: {
		[store.action.TOGGLE_NAV]: ({
			commit
		}, isNavExpand) => {
			return new Promise((resolve, reject) => {
				commit(store.mutation.TOGGLE_NAV, isNavExpand);
				resolve(isNavExpand);
			}).catch(err => {
				console.log(store.action.TOGGLE_NAV, err);
			});
		}
	}
};

export default app;
