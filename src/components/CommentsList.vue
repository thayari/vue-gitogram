<template>
	<div class="c-comments">
			<TogglerButton @onToggle="toggle" />
			<ul class="comments-list" v-if="shown">
				<li class="comment" v-for="i in 3" :key="i" >
					<span class="username">joshua_l</span>
					<span class="text">Enable performance measuring in production, at the user's request</span>
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
