<template>
	<div class="user-container">
		<h2 id="users-title">Usuarios</h2>
		<div class="users-section">
			<UserList />
			<button id="btn_add_user">Agregar</button>
		</div>
	</div>
</template>

<script>
import UserList from './UserList';

export default {
	name: 'UsersContainer',
	components: {
		UserList,
	},
};
</script>

<style scoped>
.user-container {
	width: 100%;
	max-width: 720px;
	height: 720px;
	background-color: aquamarine;

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
}
</style>
