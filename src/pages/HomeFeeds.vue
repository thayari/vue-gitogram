<template>
<div>
	<TopLine>
    <template #headline>
      <h1 class="logo">Gitogram /</h1>
      <div class="icons">
        <IconView name="IconHome" />
        <div class="avatar"></div>
        <IconView name="IconSignout" />
      </div>
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
    <div class="posts-list" v-for="item in items" :key="item.id">
      <PostPreview
        :avatar="item.owner.avatar_url"
        :username="item.owner.login"
        :date="item.created_at">
        <template #repository>
          <RepositoryPreview
            :title="item.name"
            :description="item.description"
            :starCount="item.stargazers_count"
            :forkCount="item.forks"
          />
        </template>
      </PostPreview>
    </div>
  </div>
</div>
</template>

<script>
import TopLine from '../components/TopLine/TopLine.vue'
import IconView from '../icons/IconView.vue'
import StoryUserItem from '@/components/StoryUserItem/StoryUserItem.vue'
import PostPreview from '@/components/PostPreview/PostPreview.vue'
import RepositoryPreview from '@/components/RepositoryPreview/RepositoryPreview.vue'

import stories from './data.json'
import posts from './posts.json'

import * as api from '../api'

export default {
  name: 'HomeFeeds',
  components: {
    TopLine,
    IconView,
    StoryUserItem,
    PostPreview,
    RepositoryPreview
  },
  data () {
    return {
      stories,
      posts,
      items: []
    }
  },
  methods: {
    handleUserItemClick (id) {
      // console.log(id)
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./HomeFeeds.scss" scoped></style>
