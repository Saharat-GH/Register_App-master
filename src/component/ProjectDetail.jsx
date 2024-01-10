import React from "react";
import "../../StyleComponent/projectdetail.css";

export default function ProjectDetail({ showPopup, onClose }) {
  return (
    <div className={`popup ${showPopup ? "open" : ""}`}>
      <div className="popup-content-detail">
      <button className="closebtn " onClick={onClose}>
          &times;
        </button>
        <div className="contentText">
          <h2>Project Name</h2>
          <p>Project detail</p>

          <table className="table table-secondary table-bordered table-responsive text-light">
            <tbody>
              <tr>
                <th>Position:</th>
                <td>Software Engineer</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td>$80,000</td>
              </tr>
              <tr>
                <th>Amount:</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Education:</th>
                <td>Bachelor's Degree</td>
              </tr>
              <tr>
                <th>Application Closing Date:</th>
                <td>dd/mm/yyyy</td>
              </tr>
            </tbody>
          </table>  
        </div>
        <button
          onClick={onClose}
          className="btn btn-warning text-light d-flex justify-content-center link-dark"
          id="submitbtn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
