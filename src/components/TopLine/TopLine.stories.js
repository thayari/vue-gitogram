import TopLine from './TopLine.vue'

export default {
  title: 'TopLine',
  component: { TopLine }
}

export const DefaultView = () => ({
  components: { TopLine },
  template: `	<TopLine>
	<template #headline>Some text in slot</template>
	<template #content>Some text in another slot</template>
</TopLine>`
})

DefaultView.storyName = 'Стандартный вид'
