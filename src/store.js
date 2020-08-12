import Vue from 'vue';
import Vuex from 'vuex';
// import defaultImage from './assets/icons/icono_perfil.svg';

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
		EDIT_USER(state, user) {
			const users = state.users;
			users.splice(users.indexOf(user), 1);
			state.users = users;
			if (user.imageData) {
				state.newUser.imageData = user.imageData;
			}
			state.newUser.name = user.name;
			state.newUser.lastname = user.lastname;
		},
		CLEAR_USER(state) {
			state.newUser = {
				imageData: null,
				name: '',
				lastname: '',
			};
		},
		GET_USER(state, user) {
			// state.newUser.imageData = user.imageData;
			// state.newUser.name = user.name;
			// state.newUser.lastname = user.lastname;
			state.newUser = user;
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
		editUser({ commit }, user) {
			commit('EDIT_USER', user);
		},
		clearUser({ commit }) {
			commit('CLEAR_USER');
		},
	},
});
