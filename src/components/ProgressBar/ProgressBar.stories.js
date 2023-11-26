import ProgressBar from './ProgressBar.vue'

export default {
  title: 'ProgressBar',
  component: { ProgressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'Fires when progress reaches the end.'
    }
  }
}

const template = args => ({
  components: { ProgressBar },
  data () {
    return { args }
  },
  template: '<ProgressBar @onFinish="args.onFinish" />'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
