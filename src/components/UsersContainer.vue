<template>
	<div class="user-container">
		<h2 id="users-title">Usuarios</h2>

		<div class="users-section">
			<UserList />
			<button id="btn_add_user" @click="openForm" :disabled="showForm">
				<span></span>
			</button>
		</div>
		<hr />
		<UserForm v-show="showForm" />
	</div>
</template>

<script>
import UserList from './UserList';
import UserForm from './UserForm';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'UsersContainer',
	components: {
		UserList,
		UserForm,
	},
	methods: {
		...mapMutations(['openForm']),
	},
	computed: {
		...mapState(['showForm']),
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
	border: none;
	cursor: pointer;
}

#btn_add_user span {
	display: block;
	width: 76px;
	height: 76px;
	background-color: transparent;
	border: 1px dashed rgba(128, 128, 128, 0.3);
	margin: auto;
}

hr {
	border: none;
	width: 554px;
	height: 2px;
	background-color: #d3ecff;
	margin-top: 5px;
	margin-bottom: 5px;
}
</style>
