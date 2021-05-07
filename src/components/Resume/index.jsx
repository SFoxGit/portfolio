import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useMediaQuery from '@material-ui/core/useMediaQuery';
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

  const matches = useMediaQuery('(min-width:900px)');

  return (
    <>
      {matches ?
        <div className="row border rounded m-3 indCards p-2">
          <div className="col-2 d-flex flex-wrap justify-content-center align-items-center p-2">
            <p className="d-flex text-center">Page {pageNumber} of {numPages}</p>
            <p className="d-flex flex-wrap text-center">Click the resume to download</p>
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
        :
        <div className="row border rounded m-3 indCards pb-4">
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center p-2">
            <p className="col-12 text-center">Page {pageNumber} of {numPages}</p>
            <p className="col-12 d-flex flex-wrap text-center">Click the resume to download</p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center p-2">
            <Button style={{ zIndex: "1" }} onClick={() => newPage()}>{pageNumber === 1 ? ">" : "<"}</Button>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <a className="resumeMobile justify-content-center" download="ShawnFoxResume.pdf" href="./images/ShawnFoxResume2021.pdf">
              <Document
                file="./images/ShawnFoxResume2021.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page scale={0.5}
                  paperSize="A4"
                  margin="2cm"
                  className="resume d-flex justify-content-center" pageNumber={pageNumber} />
              </Document>
            </a>
          </div>
        </div>
      }
    </>
  )
}

export default Resume;