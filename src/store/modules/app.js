import {
	store
} from 'const/store';

const app = {
	state: {
		isNavExpand: false,
	},
	mutations: {
		[store.mutation.SET_IS_NAV_EXPAND]: (state, isNavExpand) => {
			state.isNavExpand = isNavExpand;
		}
	},
	actions: {
		[store.action.TOGGLE_NAV]: ({
			commit
		}, isNavExpand) => {
			return new Promise((resolve, reject) => {
				commit(store.mutation.SET_IS_NAV_EXPAND, isNavExpand);
				resolve(isNavExpand);
			}).catch(err => {
				console.log(store.action.TOGGLE_NAV, err);
			});
		}
	}
};

export default app;
