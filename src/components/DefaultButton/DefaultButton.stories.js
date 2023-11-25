import DefaultButton from './DefaultButton.vue'

export default {
  title: 'DefaultButton',
  component: { DefaultButton },
  argTypes: {
    textContent: {
      control: {
        type: 'text'
      }
    }
  }
}

const template = (args) => ({
  components: { DefaultButton },
  data () {
    return { args }
  },
  template: '<DefaultButton v-bind="args"></DefaultButton>'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'

DefaultView.args = {
  textContent: 'Follow'
}
