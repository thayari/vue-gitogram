<template>
  <div class="c-icons">
		<IconView name="IconHome"  @click="openHome"/>
		<div class="avatar" :style="{ 'background-image': `url(${userAvatarUrl})` }" @click="openProfile"></div>
		<IconView name="IconSignout" @click="signout"/>
	</div>
</template>

<script>
import IconView from '../../icons/IconView.vue'

export default {
  name: 'LoginIcons',
  components: {
    IconView
  },
  computed: {
    userAvatarUrl () {
      return this.$store.state.user.data.avatar_url || 'none'
    }
  },
  methods: {
    signout () {
      localStorage.clear()
      this.$router.replace({ name: 'auth' })
    },

    openProfile () {
      this.$router.push({ name: 'profile' })
    },

    openHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.c-icons {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 145px;
	width: 145px;
}

.avatar {
	width: 37px;
	height: 37px;
	border-radius: 50%;
	background-color: #7f7f7f;
	background-size: cover;
}
</style>
