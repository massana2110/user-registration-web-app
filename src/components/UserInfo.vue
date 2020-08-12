<template>
	<div>
		<div class="user-info-container" v-if="users.length > 0">
			<div
				class="profile-image-container"
				v-if="users[userSelected].imageData === null"
			>
				<span
					class="btn-user-info"
					:style="{
						'background-image': `url(${this.editUserInfo})`,
					}"
				></span>
				<img :src="defaultImage" alt="default-picture" />
			</div>
			<div class="profile-image-container" v-else>
				<span
					class="btn-user-info"
					:style="{
						'background-image': `url(${this.editUserInfo})`,
					}"
				></span>
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
	</div>
</template>

<script>
import { mapState } from 'vuex';
import defaultImage from '../assets/icons/icono_perfil.svg';
import editUserInfo from '../assets/icons/icono_editar.svg';

export default {
	data() {
		return {
			defaultImage,
			editUserInfo,
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
	position: relative;
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

.btn-user-info {
	width: 20px;
	height: 20px;
	background-repeat: no-repeat;
	position: absolute;
	top: 5%;
	right: 5%;
}
</style>
