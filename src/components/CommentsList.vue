<template>
	<div class="c-comments">
			<TogglerButton @onToggle="toggle" />
			<ul class="comments-list" v-if="shown">
				<li class="comment" v-for="comment in comments" :key="comment.id" >
					<span class="username">{{ comment.username }}</span>
					<span class="text">{{ comment.text }}</span>
				</li>
			</ul>
		</div>
</template>

<script>
import TogglerButton from './TogglerButton.vue'
export default {
  components: {
    TogglerButton
  },
  props: {
    comments: {
      type: Object
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
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
