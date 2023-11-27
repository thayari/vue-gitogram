import PostStats from './PostStats.vue'

export default {
  title: 'PostStats',
  component: { PostStats },
  argTypes: {
    label: {
      type: 'text',
      defaultValue: 'Fork'
    },
    count: {
      type: 'number',
      defaultValue: 0
    }
  }
}

const template = args => ({
  components: { PostStats },
  data () {
    return { args }
  },
  template: '<PostStats />'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'

DefaultView.args = {
  label: 'Fork',
  count: 0
}
