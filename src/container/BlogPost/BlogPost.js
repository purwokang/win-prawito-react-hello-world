import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from '../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends Component {
    state = {
        post: []
    }

    handleRemove = (data) => {
        console.log(data);
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        axios.get('http://localhost:3004/posts/')
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    post: result.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;