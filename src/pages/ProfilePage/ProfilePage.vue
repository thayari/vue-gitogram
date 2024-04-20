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
      <div class="column column-left">
        <h2>My profile</h2>
        <ProfileSummary />
      </div>
      <div class="column column-right">
        <h2 class="user-repos-title" >Repositories <span>{{ userData.public_repos }}</span></h2>
        <div class="user-repos" v-if="userRepos && userRepos.length > 0">
          <div v-for="repo in userRepos" :key="repo.id" class="repo-item">
              <RepositoryPreview
                :title="repo.name"
                :description="repo.description"
                :starCount="repo.stargazers_count"
                :forkCount="repo.forks"
              />
          </div>
        </div>
        <div class="loader-wrapper" v-else-if="!userRepos">
          <LoaderView />
        </div>
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
import LoaderView from '@/components/LoaderView/LoaderView.vue'
import RepositoryPreview from '@/components/RepositoryPreview/RepositoryPreview.vue'

export default {
  name: 'ProfilePage',
  components: {
    TopLine,
    LoginIcons,
    LogoView,
    ProfileSummary,
    LoaderView,
    RepositoryPreview
  },
  computed: {
    ...mapState({
      userData: state => state.user.data,
      userRepos: state => state.user.userRepos
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser',
      fetchUserRepos: 'user/fetchUserRepos'
    })
  },

  async created () {
    if (!this.userData.login) {
      await this.fetchUser()
      await this.fetchUserRepos({ fullName: this.userData.login })
    }
  }
}
</script>

<style scoped>
.column-right {
  position: relative;
  box-sizing: border-box;
  padding-left: 74px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    border-left: 1px solid #D3D3D3;
    top: -32px;
    left: 0;
    bottom: 0;
  }
}

.column-left {
  box-sizing: border-box;
  padding-right: 74px;
  margin-right: auto;
}

.repo-item {
  width: 100%;
}

.user-repos-title {
  span {
    font-size: 0.8em;
    color: gray;
    float: right;
  }
}
</style>
