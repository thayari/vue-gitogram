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
  <div class="g-container">
    <div class="posts-list">
      <PostPreview :avatar="stories[0].avatar" :username="stories[0].username" />
    </div>
  </div>
</div>
</template>

<script>
import TopLine from '../components/TopLine.vue'
import IconView from '../icons/IconView.vue'
import StoryUserItem from '@/components/StoryUserItem.vue'
import PostPreview from '@/components/PostPreview.vue'
import stories from './data.json'

export default {
  name: 'HomeFeeds',
  components: {
    TopLine,
    IconView,
    StoryUserItem,
    PostPreview
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
