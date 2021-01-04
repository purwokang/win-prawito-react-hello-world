import React, { Component, Fragment } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                        <Link to="/lifecycle" >LifeCycleComp</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;