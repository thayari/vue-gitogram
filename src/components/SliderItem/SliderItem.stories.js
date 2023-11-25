import SliderItem from './SliderItem.vue'

export default {
  title: 'SliderItem',
  component: { SliderItem }
}

const template = () => ({
  components: { SliderItem },
  template: '<SliderItem>Some text</SliderItem>'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
