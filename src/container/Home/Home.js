import React, { Component, Fragment } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
// import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter } from 'react-router-dom';
import './Home.css'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                    </div> */}
                    <p>LifeCycle Component</p>
                    <hr />
                    {
                        this.state.showComponent
                            ?
                            <LifeCycleComp />
                            : null
                    }
                    {/* <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} /> */}
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;