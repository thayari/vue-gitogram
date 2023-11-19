<template>
<div>
	<TopLine>
    <template #headline>
      <h1 class="logo">Gitogram /</h1>
      <IconView name="IconHome" />
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="story in stories" :key="story.id">
          <StoryUserItem
            :avatar="story.avatar"
            :username="story.username"
            @onClick="handleUserItemClick(story.id)"
          />
        </li>
      </ul>
    </template>
  </TopLine>
</div>
</template>

<script>
import TopLine from '../components/TopLine.vue'
import IconView from '../icons/IconView.vue'
import StoryUserItem from '@/components/StoryUserItem.vue'
import stories from './data.json'

export default {
  name: 'HomeFeeds',
  components: {
    TopLine,
    IconView,
    StoryUserItem
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handleUserItemClick (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss" src="./HomeFeeds.scss" scoped></style>
