<template>
	<div class="c-slider-item">
		<ProgressBar />
		<div class="user-wrapper">
			<UserItem />
		</div>
		<div class="content-wrapper">
			<slot></slot>
		</div>

		<DefaultButton />
	</div>
</template>

<script>
import DefaultButton from '../DefaultButton/DefaultButton.vue'

export default {
  name: 'SliderItem',
  components: {
    DefaultButton
  }
}

</script>

<style lang="scss" scoped></style>
