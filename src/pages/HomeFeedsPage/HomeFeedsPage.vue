<template>
<div>
	<TopLine>
    <template #headline>
      <LogoView />
      <div class="icons">
        <IconView name="IconHome" />
        <div class="avatar"></div>
        <IconView name="IconSignout" @click="signout"/>
      </div>
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="(item, index) in trendings.data" :key="item.id">
          <StoryUserItem
            :avatar="item.owner.avatar_url"
            :username="item.owner.login"
            @onClick="handleUserItemClick(index)"
          />
        </li>
      </ul>
    </template>
  </TopLine>
  <div class="g-container">
    <div v-if="trendings.loading" class="preload">Loading...</div>
    <div v-else-if="Object.keys(trendings.data).length" class="posts-list" v-for="item in trendings.data" :key="item.id">
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

import { mapState, mapActions } from 'vuex'

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
  computed: {
    ...mapState({
      trendings: state => state.trendings,
      currentSlide: state => state.currentSlide
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      setCurrentSlide: 'setCurrentSlide'
    }),

    async handleUserItemClick (index) {
      this.setCurrentSlide(index)
      this.$router.push({ name: 'stories' })
    },

    signout () {
      localStorage.clear()
      this.$router.replace({ name: 'auth' })
    }
  },
  async created () {
    this.fetchTrendings()
  }
}
</script>

<style lang="scss" src="./HomeFeedsPage.scss" scoped></style>
