<template>
	<div :class="['c-progressbar', { 'active' : active }]">
		<div ref="progressLine" class="progress-line"></div>
	</div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.progressLine.addEventListener('transitionend', this.emitOnFinish)
    this.$nextTick(() => {
      this.active = true
    })
  },
  beforeUnmount () {
    this.$refs.progressLine.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped>
.c-progressbar {
	width: 100%;
	height: 2px;
	border-radius: 1px;
	background: rgba(49, 174, 84, 0.30);
	position: relative;

	.progress-line {
		position: absolute;
		left: 0;
		height: 100%;
		width: 0%;
		border-radius: 1px;
		background: #31AE54;
		transition: width 5000ms linear;
	}

	&.active {
		.progress-line {
			width: 100%;
		}
	}
}
</style>
