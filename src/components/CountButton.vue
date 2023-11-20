<template>
	<div class="count-button">
		<button class="button">
			<IconView :name="iconName" v-if="iconName" />
			<span>{{ label }}</span>
		</button>
		<div class="count">{{ count }}</div>
	</div>
</template>

<script>
import IconView from '../icons/IconView.vue'
export default {
  name: 'CountButton',
  components: {
    IconView
  },
  props: {
    label: {
      type: String,
      required: true
    },
    iconName: {
      type: String
    },
    count: {
      type: [String, Number],
      required: true,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.count-button {
	border: #1B1F2326 1px solid;
	display: flex;

	.button {
		padding: 0 13px;
		background-color: #FAFBFC;
		display: flex;
		align-items: center;
		border-right: #1B1F2326 1px solid;

		.icon {
			height: 16px;
			margin-right: 4px;
		}

		&:hover {
			background-color: #f0f0f0;
		}
	}

	.count {
		padding: 0 13px;
	}

	&:first-child {
    border-radius: 6px 0px 0px 6px;
  }

	&:last-child {
    border-radius: 0px 6px 6px 0px;
  }
}
</style>
