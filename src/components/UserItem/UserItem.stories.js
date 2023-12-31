import UserItem from './UserItem.vue'

export default {
  title: 'UserItem',
  component: { UserItem }
}

const template = (args) => ({
  components: { UserItem },
  data () {
    return { args }
  },
  template: '<UserItem v-bind="args"></UserItem>'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'

DefaultView.args = {
  avatar: 'https://i.pravatar.cc/150',
  username: 'Username'
}
