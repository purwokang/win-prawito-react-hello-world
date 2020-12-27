import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/GBvnzRwoizo/hqdefault.jpg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">title here</p>
            <p className='desc' >desc here</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00'
}

export default YouTubeComp;