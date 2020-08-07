<template>
	<div class="user-list">
		<img
			src="../assets/icons/ilustracion_usuarios_vacios.svg"
			alt="no_usuarios"
		/>
	</div>
</template>

<script>
export default {
	name: 'UserList',
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
