<template>
	<div class="user-list">
		<img
			v-if="users.length === 0"
			src="../assets/icons/ilustracion_usuarios_vacios.svg"
			alt="no_usuarios"
		/>
		<h3 v-for="(item, index) in users" :key="index">
			{{ item.nombre }}
		</h3>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'UserList',
	computed: {
		...mapState(['users']),
	},
};
</script>

<style scoped>
.user-list {
	background-color: #f1f4f7;
	width: 100%;
	max-width: 431px;
	height: 86px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	width: 99.69px;
	height: 78px;
}
</style>
