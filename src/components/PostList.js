import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>Post List Here</div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { posts: state.postList }
// }

export default connect(
  null, 
  { fetchPosts }
)(PostList);