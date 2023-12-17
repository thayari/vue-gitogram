<template>
<div>
	<TopLine>
    <template #headline>
      <LogoView />
      <div class="icons">
        <IconView name="IconHome" />
        <div class="avatar" :style="{ 'background-image': `url(${userAvatarUrl})` }"></div>
        <IconView name="IconSignout" @click="signout"/>
      </div>
    </template>
    <template #content>
      <div class="loader-wrapper" v-if="trendings.loading">
        <LoaderView />
      </div>
      <ul class="stories" v-else-if="Object.keys(trendings.data).length">
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
    <div class="loader-wrapper" v-if="starred.loading">
      <LoaderView />
    </div>
    <div v-else-if="Object.keys(starred.data).length" class="posts-list" v-for="item in starred.data" :key="item.id">
      <PostPreview
        :itemData="item">
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
import LoaderView from '@/components/LoaderView/LoaderView.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeFeedsPage',
  components: {
    TopLine,
    IconView,
    StoryUserItem,
    PostPreview,
    RepositoryPreview,
    LogoView,
    LoaderView
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings,
      starred: state => state.starred,
      currentSlide: state => state.currentSlide
    }),

    userAvatarUrl () {
      return this.$store.state.user.data.avatar_url || 'none'
    }
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
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
    this.fetchStarred()
    console.log(this.starred)
  }
}
</script>

<style lang="scss" src="./HomeFeedsPage.scss" scoped></style>
