import React, { Component } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';

class Home extends Component {
    render() {
        return (
            <div>
                <p>YouTube Component</p>
                <hr />
                <YouTubeComp time='7.12' />
                <YouTubeComp time='8.02' />
                <YouTubeComp time='5.04' />
                <YouTubeComp time='4.12' />
                <YouTubeComp />
            </div>
        )
    }
}

export default Home;