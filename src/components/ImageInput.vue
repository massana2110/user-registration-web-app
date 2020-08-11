<template>
	<div
		class="image-input"
		@click="chooseImage"
		:style="{
			'background-image': `url(${this.$store.state.newUser.imageData})`,
		}"
		@dragenter="dragging = true"
		@dragleave="dragging = false"
	>
		<span v-if="!this.$store.state.newUser.imageData" class="placeholder">
			<img src="../assets/icons/icono_perfil.svg" alt="icon-profile" />
		</span>
		<!-- <input
			class="file-input"
			type="file"
			ref="fileInput"
			@change="onSelectFile"
		/> -->
		<input
			ref="fileInput"
			id="file"
			class="file-input"
			type="file"
			@input="onSelectFile"
		/>
	</div>
</template>

<script>
export default {
	name: 'ImageInput',
	data() {
		return {
			dragging: false,
		};
	},
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
		onFileChange(e) {
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createImage(files[0]);
		},
		createImage(file) {
			const reader = new FileReader();

			reader.onload = e => {
				this.$store.state.newUser.imageData = e.target.result;
				// this.$store.state.newUser.imageData = this.image;
			};
			reader.readAsDataURL(file);
			// this.$emit('input', file);
		},
	},
};
</script>

<style scoped>
.image-input {
	width: 120px;
	height: 102px;
	cursor: pointer;
	background: #f0f0f0;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
}

.placeholder {
	background: #f0f0f0;
	width: 108px;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px dashed rgba(128, 128, 128, 0.411);
	border-radius: 10px;
}

.file-input {
	cursor: pointer;
	display: none;
}
</style>
