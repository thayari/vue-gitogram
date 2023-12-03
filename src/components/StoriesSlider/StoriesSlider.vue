<template>
	<div class="c-stories-slider">
		<div class="stories-container" ref="slider">
			<SliderItem
        ref="item"
        v-for="(item, index) in items.data"
        :data="item"
        :key="item.id"
        :active="slideIndex == index"
        :btnsShown="activeBtns"
        @onNextSlide="handeleSlide(index+1)"
        @onPrevSlide="handeleSlide(index-1)"
        />
		</div>
	</div>
</template>

<script>
import SliderItem from '../SliderItem/SliderItem.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'StoriesSlider',
  components: {
    SliderItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      items: state => state.items
    }),
    activeBtns () {
      if (this.slideIndex === 0) return ['next']
      if (this.slideIndex === this.items.length - 1) return ['prev']
      return ['prev', 'next']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchReadme: 'repoReadme/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const fullName = this.items[this.slideIndex].full_name
      await this.fetchReadme({ fullName })
    },
    handleSlide (slideIndex) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'),
        10
      )

      this.slideIndex = slideIndex
      this.sliderPosition = -(slideWidth * slideIndex)

      slider.style.transform = `translateX(${this.sliderPosition})`
    }
  },
  async created () {
    await this.fetchTrendings()
  }
}
</script>

<style lang="scss" scoped>
.stories-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: transform .4s ease;
}
</style>
