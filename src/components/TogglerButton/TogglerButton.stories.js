import TogglerButton from './TogglerButton.vue'

export default {
  title: 'Toggler Button',
  component: { TogglerButton }
}

export const DefaultView = () => ({
  components: { TogglerButton },
  template: '<TogglerButton @onToggle="toggle" />'
})

DefaultView.storyName = 'Стандартный вид'
