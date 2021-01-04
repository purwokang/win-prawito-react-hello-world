import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <div>
                    <p>YouTube Component</p>
                    <hr />
                    <YouTubeComp
                        time='7.12'
                        title='Tutorial React JS - Bagian 1'
                        desc='2x ditonton. 2 hari yang lalu.' />
                    <YouTubeComp
                        time='8.02'
                        title='Tutorial React JS - Bagian 2'
                        desc='200x ditonton. 10 hari yang lalu.' />
                    <YouTubeComp
                        time='5.04'
                        title='Tutorial React JS - Bagian 3'
                        desc='250x ditonton. 20 hari yang lalu.' />
                    <YouTubeComp
                        time='4.12'
                        title='Tutorial React JS - Bagian 4'
                        desc='230x ditonton. 100 hari yang lalu.' />
                    <YouTubeComp />
                    <p>Counter</p>
                    <hr />
                    <Product />
                    <p>Blog Post</p>
                    <hr />
                    <BlogPost />
                </div> */}
                <Fragment>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;