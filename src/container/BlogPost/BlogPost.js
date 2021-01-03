import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from '../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }

    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    post: result.data
                })
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts/', this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostAPI();
            }, (err) => {
                console.log('error: ', err);
            })
    }

    handleRemove = (data) => {
        // console.log(data);
        // menjalankan server json di port 3004:
        // json-server --watch db.json --port 3004
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                // console.log(res);
                this.getPostAPI()
            })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data
        })
        // axios.put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost)
        //     .then(res => {
        //         console.log(res);
        //         this.getPostAPI();
        //     })

    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        formBlogPostNew['id'] = timestamp;
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        this.postDataToAPI();

    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange} ></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit} >Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;