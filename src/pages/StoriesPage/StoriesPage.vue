<template>
	<div class="wrapper">
		<TopLine transparent>
			<template #headline>
				<button class="logo" @click="router.push('/')">
					<LogoView :white="true" />
				</button>
				<button class="close-btn">
					<IconView name="CloseIcon" />
				</button>
			</template>
		</TopLine>
		<div class="content">
			<StoriesSlider />
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
  components: { IconView, LogoView, StoriesSlider, TopLine }
}

</script>

<style lang="scss" scoped>
.wrapper {
	height: 100vh;
	background: #101010;
}
</style>
