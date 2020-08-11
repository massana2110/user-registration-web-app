<template>
	<div>
		<hr />
		<div class="form-container">
			<ImageInput v-model="newUser.imageData" />
			<div class="inputs-text-fields">
				<input type="text" placeholder="Nombre" v-model="newUser.name" />
				<input type="text" placeholder="Apellido" v-model="newUser.lastname" />
			</div>

			<button id="btn-save" @click="addUser"></button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import ImageInput from './ImageInput';

export default {
	name: 'UserForm',
	data() {
		return {};
	},
	components: {
		ImageInput,
	},
	methods: {
		addUser() {
			this.$store.dispatch('addUser');
			this.$store.dispatch('clearUser');
		},
	},
	computed: {
		...mapState(['newUser']),
	},
};
</script>

<style scoped>
hr {
	border: none;
	width: 554px;
	height: 2px;
	background-color: #d3ecff;
	margin-top: 10px;
	margin-bottom: 10px;
}

.form-container {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.inputs-text-fields {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
}

.inputs-text-fields input[type='text'] {
	width: 300px;
	height: 40px;
	border: 1px solid black;
	border-radius: 10px;
	padding-left: 10px;
	color: black;
	font-weight: bold;
	margin-left: 5px;
}

.inputs-text-fields input[type='text']:focus {
	outline: none;
}

#btn-save {
	margin-left: 10px;
	width: 86px;
	height: 86px;
	background-image: url('../assets/icons/icono_save.svg');
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
	border-radius: 10px;
}
</style>
