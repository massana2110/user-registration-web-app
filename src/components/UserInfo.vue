<template>
	<div>
		<div class="user-info-container" v-if="users.length > 0">
			<div
				class="profile-image-container"
				v-if="users[userSelected].imageData === null"
			>
				<img :src="defaultImage" alt="default-picture" />
			</div>
			<div class="profile-image-container" v-else>
				<img
					:style="{
						'object-fit': 'cover',
					}"
					:src="users[userSelected].imageData"
					alt="User-Profile-Image"
				/>
			</div>
			<p><b>Nombre:</b> {{ users[userSelected].name }}</p>
			<p><b>Apellido:</b> {{ users[userSelected].lastname }}</p>
		</div>
		<!-- <h3>{{ users[userSelected].name }}</h3> -->
	</div>
</template>

<script>
import { mapState } from 'vuex';
import defaultImage from '../assets/icons/icono_perfil.svg';

export default {
	data() {
		return {
			defaultImage,
		};
	},
	computed: {
		...mapState(['users', 'userSelected']),
	},
};
</script>

<style scoped>
.profile-image-container {
	width: 191px;
	height: 167px;
	background-color: #f1f5f8;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
}

.user-info-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.user-info-container > * {
	margin-bottom: 20px;
}

img {
	width: 172px;
	height: 149px;
	border-radius: 10px;
}
</style>
