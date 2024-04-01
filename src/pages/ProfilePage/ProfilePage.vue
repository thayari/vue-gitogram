<template>
<div>
	<TopLine>
    <template #headline>
      <LogoView />
      <LoginIcons />
    </template>
  </TopLine>
  <div class="g-container">
    <div class="row">
      <div class="column">
        <h2>My profile</h2>
        <ProfileSummary />
      </div>
      <div class="column">
        <h2>Repositories <span>{{ userData.public_repos }}</span></h2>
        <!-- <div class="loader-wrapper" v-if="starred.loading">
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
        </div> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TopLine from '@/components/TopLine/TopLine.vue'
import LoginIcons from '@/components/LoginIcons/LoginIcons.vue'
import LogoView from '@/components/LogoView/LogoView.vue'
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary.vue'
// import LoaderView from '@/components/LoaderView/LoaderView.vue'
// import PostPreview from '@/components/PostPreview/PostPreview.vue'

export default {
  name: 'ProfilePage',
  components: {
    TopLine,
    LoginIcons,
    LogoView,
    ProfileSummary
    // LoaderView,
    // PostPreview
  },
  computed: {
    ...mapState({
      userData: state => state.user.data
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser'
    })
  },

  async created () {
    console.log(this.userData)
    if (!this.userData.login) {
      this.fetchUser()
    }
  }
}
</script>

<style scoped>
</style>
