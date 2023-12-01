import PostPreview from './PostPreview.vue'

export default {
  title: 'PostPreview',
  component: { PostPreview }
}

const template = () => ({
  components: { PostPreview },
  data () {
    return {
      avatar: 'https://i.pravatar.cc/100',
      username: 'Username',
      date: '1701468660784'
    }
  },
  template: `<PostPreview
		:avatar="avatar"
		:username="username"
		:date="date">
		<template #repository>
			Some text in a slot
		</template>
	</PostPreview>`
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
