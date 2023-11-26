<template>
	<div class="c-slider-item">
		<div class="top-container">
			<ProgressBar />
			<div class="user-wrapper">
				<UserItem
					:avatar="'https://picsum.photos/id/25/300/300'"
					:username="'Alex'"
					:isSmall="true"/>
			</div>
		</div>

		<div class="middle-container">
			<div class="content-wrapper">
				<slot></slot>
			</div>
		</div>

		<div class="bottom-container">
			<div class="button-wrapper">
				<DefaultButton />
			</div>
		</div>
	</div>
</template>

<script>
import DefaultButton from '../DefaultButton/DefaultButton.vue'
import UserItem from '../UserItem/UserItem.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'

export default {
  name: 'SliderItem',
  components: {
    DefaultButton,
    UserItem,
    ProgressBar
  }
}

</script>

<style lang="scss" scoped>
.c-slider-item {
	width: 375px;
	height: 667px;
	border-radius: 8px;
	background: #fff;
	display: flex;
	flex-direction: column;

	.top-container {
		padding: 8px 8px 0 8px;
	}

	.middle-container {
		flex: 1;
	}

	.bottom-container {
		padding-top: 24px;
		padding-bottom: 32px;
	}

	.button-wrapper {
		width: 270px;
		margin: 0 auto;
	}

	.content-wrapper {
		width: 100%;
		height: 100%;
		border-top: 1px solid #cacaca;
		border-bottom: 1px solid #cacaca;
		overflow-y: scroll;
	}

	.user-wrapper {
		padding: 12px 4px;
	}
}
</style>
