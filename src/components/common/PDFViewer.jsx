import React from "react";
import "./styles/pdfviewer.css";

const PDFViewer = ({ location }) => {

    return (
        <div>
            <iframe className="pdf-iframe" src={location}/>
        </div>
    );
};


   export default PDFViewer;