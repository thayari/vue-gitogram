<template>
	<div class="c-topline" :class="{ transparent }">
		<div class="g-container">
			<div class="headline">
				<slot name="headline"></slot>
			</div>
			<div class="content" v-if="$slots.content">
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'TopLine',
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped src="./TopLine.scss"></style>
