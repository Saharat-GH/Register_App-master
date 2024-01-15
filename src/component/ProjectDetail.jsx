import React, { useState, useEffect } from "react";
import "../../StyleComponent/projectdetail.css";
import axios from "axios";

export default function ProjectDetail(props) {
  const { showPopup, onClose, project } = props;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const status = {
      score: null,
      userStatus: "Apply_Success",
    };
    axios.post("http://localhost:8080/status/", status, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        console.log("New status added");
      })
      .catch((error) => {
        console.error("Error adding project status:", error);
      });

    const userProject = {
      user: user.id,
      project: project.id,
      status: status.id
    };
    axios.post("http://localhost:8080/userproject/", project, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        console.log("New Project added");
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      })
    onClose();
  };

  return (
    <div className={`popup ${showPopup ? "open" : ""}`}>
      <div className="popup-content-detail">
        <button className="closebtn " onClick={onClose}>
          &times;
        </button>
        <div className="contentText">
          <h2>{project.projectName}</h2>
          <p>{project.projectDetail}</p>

          <table className="table table-secondary table-bordered table-responsive text-light">
            <tbody>
              <tr>
                <th>Position:</th>
                <td>{project.position}</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td>{project.salary}</td>
              </tr>
              <tr>
                <th>Amount:</th>
                <td>{project.amount}</td>
              </tr>
              <tr>
                <th>Education:</th>
                <td>{project.educationLevel}</td>
              </tr>
              <tr>
                <th>Application Closing Date:</th>
                <td>{project.endDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-warning text-light d-flex justify-content-center link-dark"
          id="submitbtn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
