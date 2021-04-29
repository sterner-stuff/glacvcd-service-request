<template>
	<b-form-radio :value="value">
		<div
			:class="
				'interior d-flex flex-column flex-fill justify-content-between' +
					(invalid ? ' invalid' : '')
			"
		>
			<span v-html="label ? label : value"></span>
			<div class="image-wrapper">
				<img :src="require(`@/assets/${src}`)" />
			</div>
		</div>
	</b-form-radio>
</template>
<script>
import { BFormRadio } from "bootstrap-vue";

export default {
	components: {
		BFormRadio,
	},
	props: {
		label: String,
		value: String,
		src: String,
		invalid: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";

.custom-control {
	padding-left: 0;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
}
.image-wrapper {
	width: 100%;
	position: relative;
	margin: 1em auto 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
	img {
		max-width: 100%;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
	}
}
::v-deep {
	label {
		display: flex !important;
		flex: 1 1 auto;
		justify-content: stretch;
		.interior {
			border: 2px solid #666666;
			padding: 1em 1em 2em 1em;
			text-align: center;
			font-weight: bold;
			border-radius: 10px;
			&,
			& * {
				cursor: pointer;
			}
		}
	}
	input.custom-control-input:checked + label.custom-control-label,
	label.custom-control-label:hover {
		.interior {
			background-color: rgba(0, 92, 122, 0.3);
			border-color: #007acc;
			&.invalid {
				background-color: rgba(red, 0.3);
				border-color: red;
			}
		}
	}

	input.custom-control-input,
	label.custom-control-label:before,
	label.custom-control-label:after {
		display: none !important;
	}
}
</style>
