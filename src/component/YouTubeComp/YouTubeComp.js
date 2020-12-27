import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = () => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/GBvnzRwoizo/hqdefault.jpg" alt="" />
                <p className="time">7.12</p>
            </div>
            <p className="title">title here</p>
            <p className='desc' >desc here</p>
        </div>
    )
}

export default YouTubeComp;