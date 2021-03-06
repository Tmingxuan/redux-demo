import React from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
const PostContainer = props => {
  return <Post {...props} />
}
const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts
})
export default connect(mapStateToProps)(PostContainer)
