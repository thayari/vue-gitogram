<template>
	<div class="c-post">
		<UserItem :avatar="itemData.owner.avatar_url" :username="itemData.owner.login" />
		<slot name="repository"></slot>
    <CommentsList
      @onOpened="handleCommentsOpened"
      :comments="itemData.issues.data"
      :loading="itemData.issues.loading"
      />
		<div class="date">{{ formattedDate }}</div>
	</div>
</template>

<script>
import CommentsList from '../CommentsList/CommentsList.vue'
import UserItem from '../UserItem/UserItem.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PostPreview',
  props: {
    itemData: {
      type: Object,
      required: true,
      validator: function (value) {
        return (
          value &&
        typeof value.id === 'number' &&
        typeof value.owner === 'object' &&
        typeof value.owner.avatar_url === 'string' &&
        typeof value.owner.login === 'string' &&
        typeof value.full_name === 'string'
        )
      }
    }
  },

  components: {
    CommentsList,
    UserItem
  },

  computed: {
    ...mapState({
      starred: state => state.starred
    }),

    formattedDate () {
      return this.formatDateString(this.itemData.created_at)
    }
  },

  methods: {
    ...mapActions({
      fetchIssues: 'starred/fetchIssues'
    }),

    formatDateString (dateString) {
      const options = { day: 'numeric', month: 'long' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', options)
    },

    async handleCommentsOpened () {
      await this.fetchIssues({
        id: this.itemData.id,
        fullName: this.itemData.full_name
      })
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
