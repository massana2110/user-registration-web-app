<template>
	<div class="user-list">
		<img
			v-if="users.length === 0"
			src="../assets/icons/ilustracion_usuarios_vacios.svg"
			alt="no_usuarios"
			id="img-no-users"
		/>
		<div
			v-else
			v-for="(item, index) in users"
			:key="index"
			@click="openUserInfo(index)"
			:style="{ height: 'auto' }"
		>
			<div
				class="hexagon"
				v-if="!item.imageData"
				:style="{
					'background-image': `url(${defaultImg})`,
					'background-position': 'center',
					'background-size': 'auto 47.3427px',
					'background-repeat': 'no-repeat',
					'background-color': '#FFF',
				}"
			>
				<div class="hexTop"></div>
				<div class="hexBottom"></div>
			</div>

			<div
				class="hexagon"
				:key="index"
				v-else
				:style="{
					'background-image': `url(${item.imageData})`,
					'background-position': 'center',
					'background-size': 'auto 47.3427px',
				}"
			>
				<div class="hexTop"></div>
				<div class="hexBottom"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import defaultImg from '../assets/icons/icono_perfil.svg';

export default {
	name: 'UserList',
	data() {
		return {
			defaultImg,
		};
	},
	computed: {
		...mapState(['users']),
	},
	methods: {
		openUserInfo(index) {
			if (!this.$store.state.showUserInfo) {
				this.$store.state.showUserInfo = !this.$store.state.showUserInfo;
			}
			this.$store.state.userSelected = index;
		},
	},
};
</script>

<style scoped>
.user-list {
	background-color: #f1f4f7;
	width: 100%;
	max-width: 431px;
	min-height: 86px;
	height: auto;
	border-radius: 10px;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
	box-shadow: -4px -4px 15px 0px rgba(255, 255, 255, 0.5),
		8px 8px 10px 0px rgba(159, 166, 173, 0.15);
}

#img-no-users {
	width: 99.69px;
	height: 78px;
}

.hexagon {
	position: relative;
	width: 45px;
	height: 25.98px;
	border-left: solid 2px #887cd2;
	border-right: solid 2px #887cd2;
}

.hexTop,
.hexBottom {
	position: absolute;
	z-index: 1;
	width: 31.82px;
	height: 31.82px;
	overflow: hidden;
	-webkit-transform: scaleY(0.5774) rotate(-45deg);
	-ms-transform: scaleY(0.5774) rotate(-45deg);
	transform: scaleY(0.5774) rotate(-45deg);
	background: inherit;
	left: 4.59px;
}

.hexTop:after,
.hexBottom:after {
	content: '';
	position: absolute;
	width: 41px;
	height: 23.671361036774655px;
	-webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-11.8357px);
	-ms-transform: rotate(45deg) scaleY(1.7321) translateY(-11.8357px);
	transform: rotate(45deg) scaleY(1.7321) translateY(-11.8357px);
	-webkit-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	transform-origin: 0 0;
	background: inherit;
}

.hexTop {
	top: -15.9099px;
	border-top: solid 2.8284px #887cd2;
	border-right: solid 2.8284px #887cd2;
}

.hexTop:after {
	background-position: center top;
}

.hexBottom {
	bottom: -15.9099px;
	border-bottom: solid 2.8284px #887cd2;
	border-left: solid 2.8284px #887cd2;
}

.hexBottom:after {
	background-position: center bottom;
}

.hexagon:after {
	content: '';
	position: absolute;
	top: 1.1547px;
	left: 0;
	width: 41px;
	height: 23.6714px;
	z-index: 2;
	background: inherit;
}
</style>
