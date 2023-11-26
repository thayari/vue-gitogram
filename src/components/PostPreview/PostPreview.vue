<template>
	<div class="c-post">
		<UserItem :avatar="postData.user.avatar" :username="postData.user.username" />
		<slot name="repository"></slot>
		<CommentsList :comments="postData.comments" />
		<div class="date">{{ postData.date }}</div>
	</div>
</template>

<script>
import CommentsList from '../CommentsList/CommentsList.vue'
import UserItem from '../UserItem/UserItem.vue'

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
    UserItem
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
