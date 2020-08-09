<template>
	<div
		class="image-input"
		@click="chooseImage"
		:style="{
			'background-image': `url(${this.$store.state.newUser.imageData})`,
		}"
	>
		<span v-if="!this.$store.state.newUser.imageData" class="placeholder"
			>Choose an Image</span
		>
		<input
			class="file-input"
			type="file"
			ref="fileInput"
			@input="onSelectFile"
		/>
	</div>
</template>

<script>
export default {
	name: 'ImageInput',
	methods: {
		chooseImage() {
			this.$refs.fileInput.click();
		},
		onSelectFile() {
			const input = this.$refs.fileInput;
			const files = input.files;
			if (files && files[0]) {
				const reader = new FileReader();
				reader.onload = e => {
					this.$store.state.newUser.imageData = e.target.result;
				};
				reader.readAsDataURL(files[0]);
				this.$emit('input', files[0]);
			}
		},
	},
};
</script>

<style scoped>
.image-input {
	width: 150px;
	height: 150px;
	cursor: pointer;
	background-size: cover;
	background-position: center center;
}

.placeholder {
	background: #f0f0f0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.file-input {
	display: none;
}
</style>
