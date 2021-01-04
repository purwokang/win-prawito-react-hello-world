import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;