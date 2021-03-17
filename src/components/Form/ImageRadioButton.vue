<template>
    <div :class="'image-radio-wrapper flex-fill d-flex flex-column' + ( selected ? ' selected' : '' ) + ( invalid ? ' invalid' : '')">
        <b-form-radio :value="value">
            <div class="interior d-flex flex-column flex-fill justify-content-between">
                <span v-html="label ? label : value"></span>
                <img :src="require(`@/assets/${src}`)">
            </div>
        </b-form-radio>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        value: String,
        src: String,
        selected: Boolean,
        invalid: Boolean,
    }
}
</script>
<style lang="scss" scoped>
.image-radio-wrapper {
    .interior {
        border:2px solid #666666;
        padding:1em 1em 2em 1em;
        text-align:center;
        font-weight:bold;
        border-radius:10px;
        &, & * {
            cursor:pointer;
        }
    }
    &:hover, &.selected {
        .interior {
            background-color:rgba(0, 92, 122, .3);
            border-color:#007acc;
        }
        &.invalid {
            .interior {
                background-color:transparent;
                border-color:red;
            }
        }
    }
}
.custom-control {
    padding-left:0;
}
img {
    max-width:100%;
    margin: 1em auto 0;
    width: 150px;
    height: 150px !important;
    object-fit: cover;
}
::v-deep {
    label {
        display:flex;
        flex:1 1 auto;
    }
    label {
        justify-content:stretch;
    }
    .custom-radio {
        display:flex;
        flex:1 1 auto;
    }
    input, .custom-control-label:before, .custom-control-label:after {
        display:none;
    }
}
</style>