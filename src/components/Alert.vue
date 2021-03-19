<template>
	<b-alert :variant="variant" show>
		<div class="alert-icon bg-primary">!</div>
		<slot></slot>
	</b-alert>
</template>
<script>
export default {
	props: {
		variant: {
			default: "transparent",
		},
	},
};
</script>
<style lang="scss" scoped>
::v-deep .alert-icon {
	position: relative;
	font-size: 1.6em;
	font-weight: bold;
	color: white;
	width: 1.6em;
	height: 1.6em;
	border-radius: 50%;
	text-align: center;
	float: left;
	margin-right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
