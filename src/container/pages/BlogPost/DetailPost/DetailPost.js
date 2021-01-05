import React, { Component } from 'react'

class DetailPost extends Component {
  componentDidMount() {
    console.log(this.props.match.params.postID);
  }
  render() {
    // console.log(this.props);
    return (
      <p>Detail Post</p>
    )
  }
}

export default DetailPost;