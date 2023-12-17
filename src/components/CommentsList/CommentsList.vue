<template>
	<div class="c-comments">
			<TogglerButton @onToggle="toggle" />
			<ul class="comments-list" v-if="shown">
        <LoaderView v-if="loading" />
				<li class="comment" v-for="comment in comments" :key="comment.id" >
					<span class="username">{{ comment.user.login }}</span>
					<span class="text">{{ truncateText(comment.body) }}</span>
				</li>
			</ul>
		</div>
</template>

<script>
import TogglerButton from '../TogglerButton/TogglerButton.vue'
import LoaderView from '../LoaderView/LoaderView.vue'

export default {
  name: 'CommentsList',

  components: {
    TogglerButton,
    LoaderView
  },

  props: {
    comments: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },

  emits: ['onOpened'],

  data () {
    return {
      shown: false
    }
  },

  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened) {
        this.$emit('onOpened')
      }
    },

    truncateText (text) {
      if (!text) {
        return ''
      }

      const maxLength = 200
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
      } else {
        return text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-list {
	margin-bottom: 10px;
}

.comment {
	font-size: 14px;
	line-height: 22px;
	.username {
		font-weight: 700;
		margin-right: 8px;
	}
}

</style>
