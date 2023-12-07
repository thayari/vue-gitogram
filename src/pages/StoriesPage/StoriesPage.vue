<template>
	<div class="wrapper">
		<TopLine transparent>
			<template #headline>
				<button class="logo" @click="redirectToHome">
					<LogoView :white="true" />
				</button>
				<button class="close-btn">
					<IconView name="IconClose"  @click="redirectToHome"/>
				</button>
			</template>
		</TopLine>
		<div class="content">
			<StoriesSlider :initSlide="Number(initSlide)" />
		</div>
	</div>
</template>

<script>
import IconView from '../../icons/IconView.vue'
import LogoView from '@/components/LogoView/LogoView.vue'
import StoriesSlider from '@/components/StoriesSlider/StoriesSlider.vue'
import TopLine from '@/components/TopLine/TopLine.vue'

export default {
  name: 'StoriesPage',
  components: { IconView, LogoView, StoriesSlider, TopLine },
  props: {
    initSlide: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
	height: 100vh;
	background: #101010;
}

.close-btn {
	margin-left: auto;
	color: #fff;
}
</style>
