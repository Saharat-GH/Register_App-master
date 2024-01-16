import React from "react";
import "../../StyleComponent/index.css";
import { useState, useEffect } from "react";
import ProjectDetail from "./Projectdetail";
import axios from "../api/axios";

export default function ProjectBox() {
  const [popup, setPopus] = useState(false);
  const [data, setData] = useState([]);
  
  const TogglePopup = () => {
    setPopus(!popup);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:9000/project");
      setData(res.data);
      console.log(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container d-flex justify-content-center mb-3 flex-column">
      {data.map((item) => (
        <div key={item.id} className="card mb-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-3" style={{ boxShadow: "5px 4px 1px orange" }}>
              <img
                src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
                alt=""
                style={{ maxWidth: "200px", width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-md-9">
              <div
                className="card-body bg-dark "
                id="ProjectBox"
                style={{ boxShadow: "4px 4px 1px orange", height: "100%" }}
              >
                <h5 className="card-title text-light">{item.projectName}</h5>
                <p className="card-text text-light">{item.projectDetail}</p>
                <button
                  onClick={TogglePopup}
                  className="btn btn-warning text-light link-dark lh-1"
                  style={{ position: "absolute", bottom: 10, right: 10 }}
                >
                  Submit
                </button>
                {popup && (
                  <ProjectDetail showPopup={popup} onClose={TogglePopup} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
