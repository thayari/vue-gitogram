import SliderItem from './SliderItem.vue'

export default {
  title: 'SliderItem',
  component: { SliderItem }
}

const template = () => ({
  components: { SliderItem },
  template: `<SliderItem>
    <template #content>
      Some text
    </template>
  </SliderItem>`
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
