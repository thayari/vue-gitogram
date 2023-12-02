<template>
	<div class="c-stories-slider">
		<div class="stories-container">
			<SliderItem />
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
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    getStoryData () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
