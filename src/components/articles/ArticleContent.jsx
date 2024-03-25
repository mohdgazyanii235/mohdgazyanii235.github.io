import PDFViewer from "../common/PDFViewer";
import "./styles/articleContent.css";
import React from "react";

const ArticleContent = (props) => {
    const { title, description, dateWritten, authors, location, togglePopup} = props;

    console.log( typeof location);

    return (
        <div className="article-content" onClick={togglePopup}>
            <div className="article-content-inner">
                <div className="article-content-wrapper-left">
                    <h1>{title}</h1>
                    <PDFViewer location={location} />
                </div>
                <div className="article-content-wrapper-right">
                    <h1>Details</h1>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Date Submitted:</strong> {dateWritten}</p>
                    <p><strong>Authors:</strong> {authors.join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleContent;