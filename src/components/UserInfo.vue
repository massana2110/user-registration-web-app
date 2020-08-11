<template>
	<div>
		<h3>{{ users[userSelected] }}</h3>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['users', 'userSelected']),
	},
};
</script>

<style scoped></style>
