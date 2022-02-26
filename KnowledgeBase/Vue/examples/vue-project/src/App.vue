<template>
	<div>Welcome, {{ name }}</div>
	<h3>
		<router-link to="/home">Home</router-link>
		<router-link to="/about">About</router-link>
	</h3>
	<div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
	<div class="row">
		<div class="col-6 red-border">Eddy</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			name: "Eddy",
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.red-border {
	border: 1px solid red;
}
</style>
