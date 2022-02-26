import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			num: 0
		}
	},
	mutations: {
		increment(state) {
			state.num++;
		}
	}
})

export default store









