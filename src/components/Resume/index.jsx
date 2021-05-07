import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function newPage() {
    console.log("page")
    if (pageNumber === 1) {
      setPageNumber(2)
    } else {
      setPageNumber(1)
    }
  }

  return (
    <>
      <div className="row border rounded m-3 indCards p-3">
        <div className="col-2 d-flex flex-wrap justify-content-center align-items-center p-2">
          <p>Page {pageNumber} of {numPages}</p>
          <p>Click the resume to download</p>
        </div>
        <div className="col-8 d-flex justify-content-center p-2">
          <a download="ShawnFoxResume.pdf" href="./images/ShawnFoxResume2021.pdf">
            <Document
              file="./images/ShawnFoxResume2021.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page className="resume" pageNumber={pageNumber} />
            </Document>
          </a>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center p-2">
          <Button style={{ zIndex: "1" }} onClick={() => newPage()}>{pageNumber === 1 ? ">" : "<"}</Button>
        </div>
      </div>
    </>
  )
}

export default Resume;