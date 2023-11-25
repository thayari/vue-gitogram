import ProgressBar from './ProgressBar.vue'

export default {
  title: 'ProgressBar',
  component: { ProgressBar }
}

const template = () => ({
  component: { ProgressBar },
  template: '<ProgressBar></ProgressBar>'
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
