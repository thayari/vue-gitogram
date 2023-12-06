<template>
	<div class="c-stories-slider">
		<div class="stories-container" ref="slider">
			<SliderItem
        v-for="(item, index) in trendings.data"
        :data="item"
        :key="item.id"
        :active="currentSlide == index"
        :btnsShown="activeBtns"
        @onNextSlide="handleSlide(index + 1)"
        @onPrevSlide="handleSlide(index - 1)"
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
      trendings: state => state.trendings,
      currentSlide: state => state.currentSlide
    }),
    activeBtns () {
      if (this.currentSlide === 0) return ['next']
      if (this.currentSlide === this.trendings.data.length - 1) return ['prev']
      return ['prev', 'next']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'repoReadme/fetchReadme',
      setCurrentSlide: 'trendings/setCurrentSlide'
    }),
    async fetchReadmeForActiveSlide () {
      const fullName = this.trendings.data[this.currentSlide]?.full_name
      await this.fetchReadme({ fullName })
    },
    async handleSlide (slideIndex) {
      this.setCurrentSlide(slideIndex)

      const { slider } = this.$refs
      const slideWidth = 388

      this.sliderPosition = -(slideWidth * slideIndex)

      slider.style.transform = `translateX(${this.sliderPosition}px)`

      await this.loadReadme()
    },
    async loadReadme () {
      await this.fetchReadmeForActiveSlide()
    }
  },
  async created () {
    await this.fetchTrendings()
    await this.loadReadme()
  },
  mounted () {
    this.handleSlide(this.currentSlide)
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
