import CommentsList from './CommentsList.vue'

export default {
  title: 'CommentsList',
  component: { CommentsList }
}

export const DefaultView = () => ({
  components: { CommentsList },
  template: '<CommentsList></CommentsList>'
})

DefaultView.storyName = 'Стандартный вид'
