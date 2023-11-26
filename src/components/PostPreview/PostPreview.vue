<template>
	<div class="c-post">
		<UserItem :avatar="avatar" :username="username" />
		<slot name="repository"></slot>
		<CommentsList v-if="comments" :comments="comments" />
		<div class="date">{{ formattedDate }}</div>
	</div>
</template>

<script>
import CommentsList from '../CommentsList/CommentsList.vue'
import UserItem from '../UserItem/UserItem.vue'

export default {
  name: 'PostPreview',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    comments: {
      type: Array
    },
    date: {
      type: String
    }
  },
  components: {
    CommentsList,
    UserItem
  },
  computed: {
    formattedDate () {
      return this.formatDateString(this.date)
    }
  },
  methods: {
    formatDateString (dateString) {
      const options = { day: 'numeric', month: 'long' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', options)
    }
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
