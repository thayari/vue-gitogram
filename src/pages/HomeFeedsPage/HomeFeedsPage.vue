<template>
<div>
	<TopLine>
    <template #headline>
      <LogoView />
      <div class="icons">
        <IconView name="IconHome" />
        <div class="avatar"></div>
        <IconView name="IconSignout" />
      </div>
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="item in items" :key="item.id">
          <StoryUserItem
            :avatar="item.owner.avatar_url"
            :username="item.owner.login"
            @onClick="handleUserItemClick(item.full_name)"
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
import TopLine from '@/components/TopLine/TopLine.vue'
import IconView from '../../icons/IconView.vue'
import StoryUserItem from '@/components/StoryUserItem/StoryUserItem.vue'
import PostPreview from '@/components/PostPreview/PostPreview.vue'
import RepositoryPreview from '@/components/RepositoryPreview/RepositoryPreview.vue'
import LogoView from '@/components/LogoView/LogoView.vue'

import stories from '../data.json'

import * as api from '../../api'

export default {
  name: 'HomeFeedsPage',
  components: {
    TopLine,
    IconView,
    StoryUserItem,
    PostPreview,
    RepositoryPreview,
    LogoView
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  methods: {
    async handleUserItemClick (repo) {
      const { data } = await api.readme.getReadme(repo)
      this.$router.push({ name: 'stories' })
      console.log(data)
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

<style lang="scss" src="./HomeFeedsPage.scss" scoped></style>
