import SliderItem from './SliderItem.vue'

export default {
  title: 'SliderItem',
  component: { SliderItem }
}

const template = () => ({
  components: { SliderItem },
  data () {
    return {
      showButtons: true
    }
  },
  template: `<SliderItem
    :active="true"
    :loading="false"
    :data="{ content: 'Some text' }"
  />`
})

export const DefaultView = template.bind({})
DefaultView.storyName = 'Стандартный вид'
