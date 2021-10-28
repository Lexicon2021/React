import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) { // if null....
        return <div>Loading...</div>;
    }

    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const vidTitle = video.snippet.title;
    return (
    <div>
        <div className="ui embed">
            <iframe src={vidSrc} title={vidTitle}/>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>);
};

export default VideoDetail;