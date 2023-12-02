import LogoView from './LogoView.vue'

export default {
  title: 'LogoView',
  component: LogoView,
  argTypes: {
    white: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const template = args => ({
  components: { LogoView },
  data () {
    return { args }
  },
  template: '<LogoView v-bind="args" />'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'

DefaultView.args = {
  white: false
}
