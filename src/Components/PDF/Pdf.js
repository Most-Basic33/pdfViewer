import React, {useState} from 'react'
import {Document, Page} from 'react-pdf'
import './page.css'

const Pdf = (props)=> {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess=({numPages})=>{
        setNumPages(numPages)
        setPageNumber(1)
    }

    const changePage=(offset)=>{
        setPageNumber(prevPageNumber => prevPageNumber + offset)
    }

    const previousPage=()=>{
        changePage(-1)
    }

    const nextPage=()=>{
        changePage(1)
    }
 const {pdf} = props
    return(
        <div className='mains'>
         <div id='links'>
      <a href='http://www.linkedin.com/in/bishop-walker-3201921b1 ' >View My Linkin </a> 
         <a href='https://github.com/Most-Basic33' >View My GitHub </a> 
         <a href='http://www.homefinderr.com/#/' >View My Personal Project </a> 
         </div>
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
    
}
export default Pdf