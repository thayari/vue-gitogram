<template>
	<div class="c-slider-item" :class="{ active }">
		<div class="top-container">
			<ProgressBar :active="active" />
			<div class="user-wrapper">
				<UserItem
					:avatar="data.owner?.avatar_url"
					:username="data.owner?.login"
					:isSmall="true"/>
			</div>
		</div>

		<div class="middle-container">
			<div class="content-wrapper">
				<div class="loader" v-if="loading">
          <SpinnerView />
				</div>
				<div
					v-if="data.readme && !loading"
					v-html="data.readme"
					class="content"></div>
				<PlaceholderView
					v-else
					:paragraphs="2"
				/>
			</div>
		</div>

		<div class="bottom-container">
			<div class="button-wrapper">
				<DefaultButton>Follow</DefaultButton>
			</div>
		</div>

		<div v-if="active" class="buttons">
			<button v-if="btnsShown.includes('prev')" class="btn btn-left" @click="$emit('onPrevSlide')">
				<span class="slider-icon">
					<IconView name="IconArrowSlider" />
				</span>
			</button>
			<button v-if="btnsShown.includes('next')" class="btn btn-right" @click="$emit('onNextSlide')">
				<span class="slider-icon">
					<IconView name="IconArrowSlider" />
				</span>
			</button>
		</div>
	</div>
</template>

<script>
import DefaultButton from '../DefaultButton/DefaultButton.vue'
import UserItem from '../UserItem/UserItem.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'
import PlaceholderView from '../PlaceholderView/PlaceholderView.vue'
import SpinnerView from '../SpinnerView/SpinnerView.vue'
import IconView from '@/icons/IconView.vue'

export default {
  name: 'SliderItem',
  components: {
    SpinnerView,
    DefaultButton,
    UserItem,
    ProgressBar,
    PlaceholderView,
    IconView
  },
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['prev', 'next'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
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
	flex-shrink: 0;
	transform: scale(0.8);
	opacity: 0.7;

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
		max-height: 500px;
		border-top: 1px solid #cacaca;
		border-bottom: 1px solid #cacaca;
		overflow-y: scroll;
		padding: 22px;
	}

	.user-wrapper {
		padding: 12px 4px;
	}

	.buttons {
    position: absolute;
    top: 315px;
    left: -46px;
    width: 466px;
    display: none;

		.btn {
			position: absolute;
			width: 37px;
			height: 37px;
			border-radius: 50%;
			border: #000 2px solid;
			background: #fff;
			color: #404040;
		}

		.btn-left {
			left: 0;
		}

		.btn-right {
			right: 0;
			.slider-icon {
				transform: scaleX(-1);
			}
		}
	}

	.slider-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: color .2s ease;

		&:hover {
			color: #31AE54;
		}
	}

	&.active {
		transform: scale(1);
		opacity: 1;

		.buttons {
			display: flex;
		}
	}
}
</style>
