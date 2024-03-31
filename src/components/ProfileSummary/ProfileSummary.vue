<template>
	<div class="c-summary">
		<div class="column">
			<div class="avatar" :style="{ 'background-image': `url(${userAvatarUrl})` }"></div>
		</div>
		<div class="column">
			<div class="username">Marty Stew</div>
			<div class="stats">
				<span>23</span> reposts  <span>27</span> watchers
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'RepositoryPreview',
  computed: {
    userAvatarUrl () {
      return this.$store.state.user.data.avatar_url || 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 80px;
  height: 80px;
	background-color: #7f7f7f;
  border-radius: 50%;
  position: relative;
}

.username {
	font-weight: bold;
	font-size: 24px;
}

.stats {
	font-size: 12px;
}
.stats span {
	font-size: 14px;
	font-weight: bold;
}
</style>
