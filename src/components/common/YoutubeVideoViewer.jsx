import React from "react";
import YouTube from "react-youtube";
import "./styles/youtubeviewer.css";


const YoutubeVideoViewer = ({ video_id }) => {


    const opts = {
        playerVars: {
            autoplay: 1,
        }
    }
    return (
        <YouTube 
            videoId={video_id}
            iframeClassName="youtube-iframe"
            opts={opts}
        />
    )
}

export default YoutubeVideoViewer;