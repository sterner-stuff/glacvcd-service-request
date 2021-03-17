<template>
	<div class="kw-multistep-step" :form-step-heading="heading">
		<div class="kw-multistep-body">
			<div class="container">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
	  heading: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
