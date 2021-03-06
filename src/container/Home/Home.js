// libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// style
import './Home.css'
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';



class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                        <Link to="/lifecycle" >LifeCycleComp</Link>
                        <Link to="/youtube-component" >Youtube</Link>
                        <Link to="/hooks" >Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YouTubeCompPage} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);

// json-server --watch db.json --port 3004
// next video 20. mengirimkan params ke halaman detail React Router #13
// next video 24