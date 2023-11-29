import StoryUserItem from './StoryUserItem.vue'

export default {
  title: 'StoryUserItem',
  component: { StoryUserItem }
}

const template = (args) => ({
  components: { StoryUserItem },
  data () {
    return { args }
  },
  template: '<StoryUserItem v-bind="args"></StoryUserItem>'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'

DefaultView.args = {
  avatar: 'https://i.pravatar.cc/300',
  username: 'Username'
}
