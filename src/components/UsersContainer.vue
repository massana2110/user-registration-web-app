<template>
	<div class="user-container">
		<UserInfo v-show="showUserInfo" />
		<h2 id="users-title">Usuarios</h2>
		<div class="users-section">
			<UserList />
			<button id="btn_add_user" @click="openForm" :disabled="showForm">
				<span></span>
			</button>
		</div>
		<UserForm v-show="showForm" />
	</div>
</template>

<script>
import UserList from './UserList';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'UsersContainer',
	components: {
		UserList,
		UserForm,
		UserInfo,
	},
	methods: {
		...mapMutations(['openForm']),
	},
	computed: {
		...mapState(['showForm', 'showUserInfo']),
	},
};
</script>

<style scoped>
.user-container {
	width: 100%;
	max-width: 720px;
	height: 720px;
	background-color: #d2d6e2;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.user-container #users-title {
	margin-bottom: 30px;
}

.users-section {
	width: 100%;
	display: flex;
	flex-direction: row wrap;
	justify-content: center;
	align-items: center;
}

#btn_add_user {
	margin-left: 10px;
	width: 86px;
	height: 86px;
	background-image: url('../assets/icons/icono_agregar_usuario.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-color: #f1f4f7;
	border: none;
	cursor: pointer;
	border-radius: 10px;
	box-shadow: -4px -4px 15px 0px rgba(255, 255, 255, 0.5),
		8px 8px 10px 0px rgba(159, 166, 173, 0.15);
}

#btn_add_user span {
	display: block;
	width: 76px;
	height: 76px;
	background-color: transparent;
	border: 1px dashed rgba(128, 128, 128, 0.3);
	margin: auto;
	border-radius: 10px;
}

#btn_add_user:disabled {
	box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
		inset -8px -4px 15px 0px rgba(255, 255, 255, 1),
		0px -4px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
