import RepositoryPreview from './RepositoryPreview.vue'

export default {
  title: 'RepositoryPreview',
  component: { RepositoryPreview }
}

const template = () => ({
  components: { RepositoryPreview },
  data () {
    return {
      title: 'Title',
      description: 'Description text',
      starCount: 150,
      forkCount: 10
    }
  },
  template: `<RepositoryPreview
				:title="title"
				:description="description"
				:starCount="starCount"
				:forkCount="forkCount"
			/>`
})

export const DefaultView = template.bind({})

DefaultView.storyName = 'Стандартный вид'
