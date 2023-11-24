import CommentsList from './CommentsList.vue'

export default {
  title: 'CommentsList',
  components: { CommentsList }
}

export const DefaultView = () => ({
  components: { CommentsList },
  template: '<CommentsList :comments="postData.comments" />'
})

DefaultView.story = {
  name: 'Стандартный вид'
}
