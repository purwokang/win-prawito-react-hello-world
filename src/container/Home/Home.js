// libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// style
import './Home.css'

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    state = {
        totalOrder: 5
    }

    render() {
        return (
            <Router>
                <Provider value={this.state}>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/" >Blog Post</Link>
                            <Link to="/product" >Product</Link>
                            <Link to="/lifecycle" >LifeCycleComp</Link>
                            <Link to="/youtube-component" >Youtube</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/youtube-component" component={YouTubeCompPage} />
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}

export default Home;

// json-server --watch db.json --port 3004
// next video 20. mengirimkan params ke halaman detail React Router #13
// next video 24