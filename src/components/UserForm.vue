<template>
	<div class="form-container">
		<ImageInput v-model="newUser.imageData" />
		<div>
			<input type="text" placeholder="Nombre" v-model="newUser.name" />
			<input type="text" placeholder="Apellido" v-model="newUser.lastname" />
		</div>
		<div>
			<button @click="addUser">Save</button>
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
.form-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
