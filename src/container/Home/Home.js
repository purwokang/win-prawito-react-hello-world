// libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';

// style
import './Home.css'

class Home extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                        <Link to="/lifecycle" >LifeCycleComp</Link>
                        <Link to="/youtube-component" >Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YouTubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;

// next video 20. mengirimkan params ke halaman detail React Router #13