<template>
	<div class="kw-multistep-step" :form-step-heading="heading">
		<div class="kw-multistep-body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		heading: String,
	},
};
</script>

<style scoped lang="scss"></style>
