import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users: [
			// { nombre: 'David', apellido: 'Massana' },
			// { nombre: 'Jose', apellido: 'Antonio' },
		],
		showForm: false,
	},
	mutations: {
		openForm(state) {
			state.showForm = !state.showForm;
		},
		closeForm(state) {
			state.showForm = !state.showForm;
		},
	},
	actions: {},
});
