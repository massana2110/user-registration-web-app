<template>
	<div class="form-container">
		<picture-input
			ref="pictureInput"
			width="120"
			height="102"
			@change="onChange"
			accept="image/jpeg,image/png"
			size="10"
			:custom-strings="{
				upload: '<h1>Bummer!</h1>',
				drag: 'Drag a Photo ',
			}"
		>
		</picture-input>
		<div>
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Apellido" />
		</div>
		<div>
			<button @click="closeForm">Save</button>
		</div>
	</div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import { mapMutations } from 'vuex';

export default {
	name: 'UserForm',
	data() {
		return {
			image: '',
		};
	},
	components: {
		PictureInput,
	},
	methods: {
		onChange(image) {
			console.log('New picture selected');
			if (image) {
				console.log('Picture loaded');
				this.image = image;
			} else {
				console.log('Not supported');
			}
		},
		...mapMutations(['closeForm']),
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
