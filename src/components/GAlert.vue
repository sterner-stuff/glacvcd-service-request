<template>
	<b-alert :variant="variant" show>
		<div class="row align-items-center">
			<div class="col-auto">
				<div class="alert-icon bg-primary">!</div>
			</div>
			<div class="col">
				<slot></slot>
			</div>
		</div>
	</b-alert>
</template>
<script>
import { BAlert } from "bootstrap-vue";

export default {
	components: {
		BAlert,
	},

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
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
