import StoriesSlider from './StoriesSlider.vue'

export default {
  title: 'StoriesSlider',
  component: { StoriesSlider },
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

const template = () => ({
  components: { StoriesSlider },
  template: '<StoriesSlider />'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
