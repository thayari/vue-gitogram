import CommentsList from './CommentsList.vue'

export default {
  title: 'CommentsList',
  component: { CommentsList }
}

export const DefaultView = () => ({
  components: { CommentsList },
  data () {
    return {
      comments: [
        { id: 1, username: 'User1', text: 'This is the first comment.' },
        { id: 2, username: 'User2', text: 'Another comment here.' }
      ]
    }
  },
  template: '<CommentsList :comments="comments"></CommentsList>'
})

DefaultView.storyName = 'Стандартный вид'
