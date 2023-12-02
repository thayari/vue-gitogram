<template>
	<div class="c-slider-item" :class="{ active }">
		<div class="top-container">
			<ProgressBar :active="active" />
			<div class="user-wrapper">
				<UserItem
					:avatar="'https://i.pravatar.cc/100'"
					:username="'Alex'"
					:isSmall="true"/>
			</div>
		</div>

		<div class="middle-container">
			<div class="content-wrapper">
				<div class="loader" v-if="loading">
          <SpinnerView />
				</div>
				<div
					v-if="data.content?.length && !loading"
					v-html="data.content"
					class="content"></div>
				<PlaceholderView
					v-else
					:paragraphs="2"
				/>
			</div>
		</div>

		<div class="bottom-container">
			<div class="button-wrapper">
				<DefaultButton />
			</div>
		</div>

		<template>
			<button class="btn btn-left">
			</button>
			<button class="btn btn-right">
			</button>
		</template>
	</div>
</template>

<script>
import DefaultButton from '../DefaultButton/DefaultButton.vue'
import UserItem from '../UserItem/UserItem.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'
import PlaceholderView from '../PlaceholderView/PlaceholderView.vue'
import SpinnerView from '../SpinnerView/SpinnerView.vue'

export default {
  name: 'SliderItem',
  components: {
    SpinnerView,
    DefaultButton,
    UserItem,
    ProgressBar,
    PlaceholderView
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      default: () => ({})
    }
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
