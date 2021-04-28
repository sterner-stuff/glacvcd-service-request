<template>
	<b-form-group
		data-kw-group
		:label="label"
		label-cols-sm="6"
		label-cols-xl="3"
	>
		<slot></slot>
	</b-form-group>
</template>

<script>
import { BFormGroup } from "bootstrap-vue";

export default {
	components: {
		BFormGroup,
	},
	props: {
		label: String,
	},
};
</script>
