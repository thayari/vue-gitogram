<template>
	<button class="c-button" :class="{ grey: grey }">
		<LoaderView v-if="loading" />
		<slot v-else ></slot>
	</button>
</template>

<script>
import LoaderView from '../LoaderView/LoaderView.vue'

export default {
  name: 'DefaultButton',
  props: {
    grey: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: { LoaderView }
}
</script>

<style lang="scss" scoped>
.c-button {
	background-color: #31AE54;
	color: #FFF;
	text-align: center;
	font-size: 16px;
	font-weight: 700;
	padding: 11px 18px;
	border-radius: 5px;
	transition: background-color 200ms ease;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #1f883d;
	}
	&.grey {
		background-color: #9E9E9E;

		&:hover {
			background-color: #777777;
		}
	}

}

</style>
