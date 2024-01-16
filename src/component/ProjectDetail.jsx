import React, { useEffect, useState } from "react";
import "../../StyleComponent/projectdetail.css";
import axios from "../api/axios";

export default function ProjectDetail({ showPopup, onClose }) {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("http://localhost:9000/project");
      setData(res.data);
    }
    fetchData();
  }, [])

  const sortedData = [...data].sort((a,b)=> a.id - b.id);
  return (
    <div className={`popup ${showPopup ? "open" : ""}`}>
      <div className="popup-content-detail">
      <button className="closebtn " onClick={onClose}>
          &times;
        </button>
        {sortedData.map((item)=>(

          <div key={item.id} className="contentText">
          <h2>{item.projectName}</h2>
          <p className="small">{item.ProjectDetail}</p>

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
          ))}
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
