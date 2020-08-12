<template>
	<div
		class="image-input"
		:style="{
			'background-image': `url(${this.$store.state.newUser.imageData})`,
		}"
		@dragenter="dragging = true"
		@dragleave="dragging = false"
	>
		<span v-if="!this.$store.state.newUser.imageData" class="placeholder">
			<img src="../assets/icons/icono_perfil.svg" alt="icon-profile" />
		</span>

		<input class="file-input" type="file" @change="this.onFileChange" />
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
		onFileChange(e) {
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createImage(files[0]);
		},
		createImage(file) {
			const reader = new FileReader();

			reader.onload = e => {
				this.$store.state.newUser.imageData = e.target.result;
			};
			reader.readAsDataURL(file);
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
	position: relative;
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
	width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
