<template>
	<button class="c-story-user-item" @click="$emit('onClick')">
		<div class="avatar">
      <div class="img-wrapper">
        <img :src="avatar" class="img" alt="username avatar">
      </div>
		</div>
		<div class="username">{{ username }}</div>
	</button>
</template>

<script>
export default {
  name: 'StoryUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  emits: ['onClick']
}
</script>

<style lang="scss" scoped>
.c-story-user-item {
  max-width: 80px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 2px solid #A6328D;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}
.img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.avatar:hover::before {
  opacity: 0;
}

.username {
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
