<template>
	<div class="c-auth">
		<LogoView />
		<div class="text">More than just one repository. This is our digital world.</div>
		<DefaultButton @click="authorizeWithGithub">
			Authorize with github <span class="icon"><IconView name="IconGithub" /></span>
		</DefaultButton>
	</div>
</template>

<script>
import LogoView from '@/components/LogoView/LogoView.vue'
import IconView from '@/icons/IconView.vue'
import DefaultButton from '@/components/DefaultButton/DefaultButton.vue'
import * as api from '../../api'
import env from '../../../env.js'
import { mapActions } from 'vuex'

export default {
  name: 'AuthView',
  components: { LogoView, IconView, DefaultButton },
  methods: {
    authorizeWithGithub () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status public_repo read:user')

      window.location.href = `${githubAuthApi}?${params}`
    },
    ...mapActions('user', ['updateUser']),
    updateUserData (data) {
      this.updateUser(data)
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await api.auth.getToken(code)
        const token = response?.data?.token

        if (!token) {
          throw new Error(response)
        }

        localStorage.setItem('gitogramToken', token)

        const getUserResponse = await api.user.getUserData()
        const userData = getUserResponse.data

        if (userData) {
          this.updateUserData(userData)
        } else {
          throw new Error('Invalid user data')
        }

        this.$router.replace({ name: 'home' })
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-auth {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	.text {
		color: #6f6f6f;
		font-size: 18px;
		line-height: 28px;
		margin-bottom: 38px;
	}

	.icon {
		margin-left: 0.2em;
		display: inline-block;
	}
}
</style>
