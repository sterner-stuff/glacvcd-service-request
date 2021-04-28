<template>
	<b-form-radio :value="value">
		<div
			:class="
				'interior d-flex flex-column flex-fill justify-content-between' +
					(invalid ? ' invalid' : '')
			"
		>
			<span v-html="label ? label : value"></span>
			<img :src="require(`@/assets/${src}`)" />
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
@import "node_modules/bootstrap/scss/bootstrap.scss";

.custom-control {
	padding-left: 0;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
}
img {
	max-width: 100%;
	margin: 1em auto 0;
	width: 150px;
	height: 100px !important;
	object-fit: cover;
	@include media-breakpoint-up(md) {
		height: 150px !important;
	}
}
::v-deep {
	label {
		display: flex;
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
	input:checked + label,
	label:hover {
		.interior {
			background-color: rgba(0, 92, 122, 0.3);
			border-color: #007acc;
			&.invalid {
				background-color: rgba(red, 0.3);
				border-color: red;
			}
		}
	}

	input,
	.custom-control-label:before,
	.custom-control-label:after {
		display: none;
	}
}
</style>
