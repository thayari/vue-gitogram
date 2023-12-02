<template>
	<div class="wrapper">
		<header class="header">
			<div class="g-container">
				<button class="logo" @click="router.push('/')">
					<LogoView :white="true" />
				</button>
				<button class="close-btn">
					<IconView name="CloseIcon" />
				</button>
			</div>
		</header>
		<div class="content">
			<StoriesSlider />
		</div>
	</div>
</template>

<script>
import IconView from '../../icons/IconView.vue'
import LogoView from '@/components/LogoView/LogoView.vue'
import StoriesSlider from '@/components/StoriesSlider/StoriesSlider.vue'

export default {
  components: { IconView, LogoView, StoriesSlider },
  mounted () {
    const readmeData = this.$route.params.readmeData
    console.log(readmeData)
  }
}

</script>

<style lang="scss" scoped>

</style>
