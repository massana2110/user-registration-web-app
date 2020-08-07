<template>
	<div id="app">
		<h1>Prueba IT</h1>
		<UsersContainer />
	</div>
</template>

<script>
import UsersContainer from './components/UsersContainer';

export default {
	name: 'App',
	components: {
		UsersContainer,
	},
};
</script>

<style>
*,
::before,
::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
}
</style>
