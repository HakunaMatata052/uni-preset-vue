const initStore = {
	namespaced: true,
	state: {
		initFinish:false,
	},
	getters: {},
	mutations: {
		setInitFinish(state,payload){
			state.initFinish = payload
		},
	},
	actions: {
	}
}
export default initStore
