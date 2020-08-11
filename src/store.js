import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users: [],
		newUser: {
			imageData: null,
			name: '',
			lastname: '',
		},
		userSelected: 0,
		showUserInfo: false,
		showForm: false,
	},
	mutations: {
		openForm(state) {
			state.showForm = !state.showForm;
		},
		ADD_USER(state) {
			state.users.push(state.newUser);
		},
		CLEAR_USER(state) {
			state.newUser = {
				imageData: null,
				name: '',
				lastname: '',
			};
		},
		GET_USER(state, user) {
			state.newUser.imageData = user.imageData;
			state.newUser.name = user.name;
			state.newUser.lastname = user.lastname;
		},
	},
	getters: {
		newUser(state) {
			return state.newUser;
		},
	},
	actions: {
		getUser({ commit }, user) {
			commit('GET_USER', user);
		},
		addUser({ commit }) {
			commit('ADD_USER');
		},
		clearUser({ commit }) {
			commit('CLEAR_USER');
		},
	},
});
