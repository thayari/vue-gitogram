<template>
	<div class="c-post">
		<div class="profile">
			<div class="avatar">
				<img :src="postData.user.avatar">
			</div>
			<div class="username">{{ postData.user.username }}</div>
		</div>
		<RepositoryPreview :repositoryData="postData.repository" />
		<CommentsList :comments="postData.comments" />
		<div class="date">{{ postData.date }}</div>
	</div>
</template>

<script>
import CommentsList from './CommentsList.vue'
import RepositoryPreview from './RepositoryPreview.vue'

export default {
  name: 'PostPreview',
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  components: {
    CommentsList,
    RepositoryPreview
  }
}
</script>

<style lang="scss" scoped>
.c-post {
	max-width: 980px;
	margin: 0 auto 24px;
}

.profile {
	display: flex;
	align-items: center;

	.avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 14px;

		img {
			width: 100%;
			height: auto;
		}
	}

	.username {
		font-weight: bold;
		font-size: 18px;
	}
}

.date {
  color: rgba(0, 0, 0, 0.40);
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 1.2px;
	text-transform: uppercase;
}

</style>
