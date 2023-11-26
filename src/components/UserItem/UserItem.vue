<template>
	<div :class="[ 'c-user-item', { 'small': isSmall } ]">
		<div class="avatar">
      <div class="img-wrapper">
        <img :src="avatar" class="img" alt="username avatar">
      </div>
		</div>
		<div class="username">{{ username }}</div>
	</div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    isSmall: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.c-user-item {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: relative;
	margin-right: 14px;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}

.username {
  color: #000;
  text-align: left;
  font-weight: 700;
	font-size: 18px;
}

.small {
	.avatar {
		width: 32px;
		height: 32px;
		margin-right: 12px;
		font-size: 14px;
	}
}
</style>
