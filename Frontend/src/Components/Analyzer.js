import React, { useState } from "react";
import { jsPDF } from "jspdf";
import * as xlsx from "xlsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFont,
  faHeading,
  faCopy,
  faTrash,
  faCompress,
  faFilePdf,
  faFileExcel,
  faEnvelope,
  faChartPie,
  faDownload,
  faSliders,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

function Analyzer(props) {
  const [Mail, setMail] = useState("");
  const [text, setText] = useState("");
  
  const mail_array = text.match(/[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/g);

  const removeWhitespace = () => {
    let text2 = text.split(/\s+/).join(' ');
    setText(text2);
  };

  const Pdf_text = () => {
    if (text) {
      let newPdf = new jsPDF();
      newPdf.setFont("helvetica", "bold");
      newPdf.text("Main Text", 90, 10);
      newPdf.setLineWidth(0.7);
      newPdf.line(10, 15, 200, 15);
      newPdf.setFont("helvetica", "normal");
      let line = newPdf.splitTextToSize(text, 190);
      let y = 30;
      let pageheight = newPdf.internal.pageSize.getHeight();
      let j = 0;
      while (j < line.length) {
        newPdf.text(line[j], 10, y);
        y += 7;
        if (y + 7 > pageheight) {
          newPdf.addPage();
          y = 10;
        }
        j += 1;
      }
      newPdf.save(`text-analysis-${Date.now()}.pdf`);
    } else {
      props.showalert("Text Box Is Empty");
    }
  };

  const convertToCamel = () => {
    let t1 = text.split(' ');
    for (let i = 0; i < t1.length; i++) {
      if (t1[i] !== '') {
        t1[i] = t1[i].charAt(0).toUpperCase() + t1[i].slice(1).toLowerCase();
      }
    }
    setText(t1.join(" "));
  };

  const Pdf_mail = () => {
    if (mail_array) {
      let newPdf = new jsPDF();
      newPdf.setFont("helvetica", "bold");
      newPdf.text("Extracted Emails", 90, 10);
      newPdf.setLineWidth(0.7);
      newPdf.line(10, 15, 200, 15);
      newPdf.setFont("helvetica", "normal");
      let main_mail_do = mail_array.join('\n');
      let line = newPdf.splitTextToSize(main_mail_do, 180);
      let y = 30;
      let pageheight = newPdf.internal.pageSize.getHeight();
      let j = 0;
      while (j < line.length) {
        newPdf.text(line[j], 10, y);
        y += 7;
        if (y + 7 > pageheight) {
          newPdf.addPage();
          y = 10;
        }
        j += 1;
      }
      newPdf.save(`extracted-emails-${Date.now()}.pdf`);
    } else {
      props.showalert("No mail in the Given Text");
    }
  };

  const mailDetector = () => {
    if (mail_array) {
      let main_mail = mail_array.join('\n');
      setMail(main_mail);
    } else {
      setMail("");
    }
  };

  const setmail_1 = (event) => {
    setMail(event.target.value);
  };

  const changetoupper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const textareachange = (event) => {
    setText(event.target.value);
  };

  const changetolower = () => {
    let newtext1 = text.toLowerCase();
    setText(newtext1);
  };

  const numberofCharacterWithoutSpace = () => {
    let num_ch = 0;
    let text1 = text.split(/\s+/).join("");
    for (let i = 0; i < text1.length; i++) {
      if (text1[i] !== " " && text1[i] !== '') {
        num_ch += 1;
      }
    }
    return num_ch;
  };

  const numberofCharacterWithSpace = () => {
    return text.length;
  };

  const numberofWords = () => {
    let num_words = 0;
    let text1 = text.split(/\s+/);
    for (let i = 0; i < text1.length; i++) {
      if (text1[i] !== " " && text1[i] !== "") {
        num_words += 1;
      }
    }
    return num_words;
  };

  const cleartext = () => {
    setText("");
    setMail("");
  };

  const Clipboardcopy_text = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      if (text !== "") {
        navigator.clipboard.writeText(text);
        props.showalert("Text Copied To Clipboard");
      } else {
        props.showalert("Kindly enter text in the box");
      }
    }
  };

  const Clipboardcopy_mail = () => {
    if (mail_array && mail_array.length > 0) {
      navigator.clipboard.writeText(mail_array.join('\n'));
      props.showalert("Mails Copied To Clipboard");
    } else {
      props.showalert("Mail Box is Empty");
    }
  };

  const nu_mails = () => {
    return mail_array ? mail_array.length : 0;
  };

  const Download_summary_xls = () => {
    const table = document.getElementById("summary");
    if (table) {
      const workbook = xlsx.utils.table_to_book(table, { sheet: "Sheet1" });
      xlsx.writeFile(workbook, "text-summary-report.xlsx");
    }
  };

  const isDark = props.mode === 'dark';

  return (
    <div className={`analyzer-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="container py-4">
        {/* Main Editor Section */}
        <div className={`card main-editor-card glass-card mb-4 ${isDark ? 'card-dark' : 'card-light'}`}>
          <div className="card-header-custom d-flex flex-wrap align-items-center justify-content-between gap-3 p-4 border-bottom">
            <div>
              <h2 className="editor-title fw-bold mb-1">
                <FontAwesomeIcon icon={faSliders} className="me-2 text-primary-accent" />
                Text Analyzer & Transformation Studio
              </h2>
              <p className="editor-subtitle text-muted mb-0">
                Paste your content below to transform text, extract email addresses, and generate statistics.
              </p>
            </div>
            <div className="quick-stats d-flex flex-wrap gap-2">
              <span className="badge stat-badge">
                <strong>{numberofWords()}</strong> Words
              </span>
              <span className="badge stat-badge">
                <strong>{numberofCharacterWithSpace()}</strong> Chars
              </span>
              <span className="badge stat-badge badge-accent">
                <strong>{nu_mails()}</strong> Emails
              </span>
            </div>
          </div>

          <div className="card-body p-4">
            <textarea
              className="form-control main-textarea shadow-none"
              value={text}
              onChange={textareachange}
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Type or paste your text here..."
            ></textarea>

            {/* Action Buttons Toolbar */}
            <div className="toolbar-section mt-4">
              <span className="toolbar-label text-uppercase fw-bold text-muted small d-block mb-2">
                Quick Text Actions
              </span>
              <div className="action-buttons-grid">
                <button type="button" onClick={changetoupper} className="btn btn-action">
                  <FontAwesomeIcon icon={faFont} className="me-1" /> UPPERCASE
                </button>
                <button type="button" onClick={changetolower} className="btn btn-action">
                  <FontAwesomeIcon icon={faFont} className="me-1" /> lowercase
                </button>
                <button type="button" onClick={convertToCamel} className="btn btn-action">
                  <FontAwesomeIcon icon={faHeading} className="me-1" /> Pascal Case
                </button>
                <button type="button" onClick={removeWhitespace} className="btn btn-action">
                  <FontAwesomeIcon icon={faCompress} className="me-1" /> Fix Spaces
                </button>
                <button type="button" onClick={Clipboardcopy_text} className="btn btn-action btn-copy">
                  <FontAwesomeIcon icon={faCopy} className="me-1" /> Copy Text
                </button>
                <button type="button" onClick={cleartext} className="btn btn-action btn-clear">
                  <FontAwesomeIcon icon={faTrash} className="me-1" /> Clear All
                </button>
              </div>
            </div>

            {/* Export Actions Bar */}
            <div className="export-bar mt-4 pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-3">
              <span className="fw-semibold text-muted">
                <FontAwesomeIcon icon={faDownload} className="me-2 text-primary-accent" />
                Export Content
              </span>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" onClick={Pdf_text} className="btn btn-export-pdf">
                  <FontAwesomeIcon icon={faFilePdf} className="me-2" /> Export Main Text PDF
                </button>
                <button type="button" onClick={Pdf_mail} className="btn btn-export-pdf-secondary">
                  <FontAwesomeIcon icon={faFilePdf} className="me-2" /> Export Mails PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Extraction Studio */}
        <div className={`card glass-card mb-4 p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
          <div className="row align-items-center g-4">
            <div className="col-md-5">
              <div className="email-detector-info">
                <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary-accent" />
                  Email Extractor
                </h4>
                <p className="text-muted small mb-3">
                  Scan your text for any email addresses. Extracted emails will be listed for easy copying or PDF download.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" onClick={mailDetector} className="btn btn-gradient-primary">
                    <FontAwesomeIcon icon={faArrowRight} className="me-2" /> Detect Emails
                  </button>
                  <button type="button" onClick={Clipboardcopy_mail} className="btn btn-outline-custom">
                    <FontAwesomeIcon icon={faCopy} className="me-2" /> Copy Emails
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="email-output-container">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small fw-bold text-muted">EXTRACTED EMAILS</span>
                  <span className="badge bg-primary rounded-pill">{nu_mails()} Found</span>
                </div>
                <textarea
                  value={Mail}
                  readOnly
                  onChange={setmail_1}
                  rows="5"
                  className="form-control email-textarea"
                  placeholder="Click 'Detect Emails' to extract email addresses..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics & Summary Section */}
        <div className={`card glass-card p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <h3 className="fw-bold mb-1 d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faChartPie} className="text-primary-accent" />
                Text Analytics Summary
              </h3>
              <p className="text-muted small mb-0">Detailed statistical analysis of your content.</p>
            </div>
            <button type="button" onClick={Download_summary_xls} className="btn btn-excel-download">
              <FontAwesomeIcon icon={faFileExcel} className="me-2" /> Download Excel Report
            </button>
          </div>

          {/* Metric Stat Cards */}
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
              <div className="metric-card">
                <span className="metric-title">Words Count</span>
                <span className="metric-value">{numberofWords()}</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-card">
                <span className="metric-title">Chars (w/ space)</span>
                <span className="metric-value">{numberofCharacterWithSpace()}</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-card">
                <span className="metric-title">Chars (w/o space)</span>
                <span className="metric-value">{numberofCharacterWithoutSpace()}</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-card">
                <span className="metric-title">Emails Detected</span>
                <span className="metric-value text-primary-accent">{nu_mails()}</span>
              </div>
            </div>
          </div>

          {/* Hidden/Styled Table for Excel export and full details */}
          <div className="table-responsive">
            <table id="summary" className="table custom-styled-table mb-0">
              <thead>
                <tr>
                  <th scope="col">Analysis Metric</th>
                  <th scope="col" className="text-end">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Number of Characters (Without Space)</th>
                  <td className="text-end fw-bold">{numberofCharacterWithoutSpace()}</td>
                </tr>
                <tr>
                  <th scope="row">Number of Characters (With Space)</th>
                  <td className="text-end fw-bold">{numberofCharacterWithSpace()}</td>
                </tr>
                <tr>
                  <th scope="row">Number of Words</th>
                  <td className="text-end fw-bold">{numberofWords()}</td>
                </tr>
                <tr>
                  <th scope="row">Number of Email Addresses Detected</th>
                  <td className="text-end fw-bold text-primary-accent">{nu_mails()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyzer;