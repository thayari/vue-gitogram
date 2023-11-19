<template>
	<button :class="['toggler', { 'active' : isOpened }]" @click="toggle">
		<span class="text">{{ isOpened ? 'Hide' : 'Show' }} issues</span>
		<span class="icon">
			<IconView name="IconArrow" />
		</span>
	</button>
</template>

<script>
import IconView from '../icons/IconView.vue'

export default {
  name: 'TogglerButton',
  components: {
    IconView
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
	display: inline-flex;
	align-items: center;

	.icon {
		width: 10px;
		transform: rotate(90deg);
	}

	&.active {
		.icon {
			transform: rotate(0);
		}
	}
}

.text {
	margin-right: 5px;
}
</style>
