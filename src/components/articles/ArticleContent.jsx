import PDFViewer from "../common/PDFViewer";
import YoutubeVideoViewer from "../common/YoutubeVideoViewer";
import "./styles/articleContent.css";
import React from "react";

const ArticleContent = (props) => {
    const { title, description, dateWritten, authors, location, togglePopup, isArticle, isYoutubeVideo, video_id} = props;

    console.log(video_id);

    const loadContent = () => {
        if (isArticle) {
            return (
                <div className="article-content-wrapper-left">
                    <h1>{title}</h1>
                    <PDFViewer location={location} />
                </div>
            )
        } else if (isYoutubeVideo) {
            return (
                <div className="article-content-wrapper-left">
                    <h1>{title}</h1>
                    <YoutubeVideoViewer video_id={video_id} />
                </div>
            )
        } else {
            console.log("failure retrieving article");
        }
    }

    return (
        <div className="article-content" onClick={togglePopup}>
            <div className="article-content-inner">
                {loadContent()}
                <div className="article-content-wrapper-right">
                    <h1>Details</h1>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Date Submitted:</strong> {dateWritten}</p>
                    <p><strong>Authors:</strong> {authors.join(', ')}</p>
                    {isYoutubeVideo ? (
                        <p><strong>Video Link:</strong> <a className="video-link" href={location}>{location}</a></p>
                    ):(
                        <p></p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArticleContent;