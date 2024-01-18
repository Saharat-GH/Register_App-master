import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav';
import TextAreaForm from '../component/TextAreaForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HReditProject() {
    const handleSubmit =()=>{

    }
    
    const [project, setProject]= useState({
        projectName: "",
        projectDetail:"",
        startDate:"",
        endDate:"",
        salary: null,
        position:"",
        amount:"",
        educationLevel:"",
    })


    const {projectName,projectDetail,startDate,endDate,salary,position,amount,educationLevel} = project;
    const {id} = useParams();


    const loader = async ()=>{
      const result = await axios.get(`http://localhost:8080/api/project/${id}`)
        setProject(result.data);
    }

    useEffect(()=>{
        loader();
    },[])   

    
    const onSubmit = async()=>{
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:8080/api/project/${id}`, project)
        }
        catch(err){
            console.log(err);
        }
    };
    
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setProject((prevProject) => ({
        ...prevProject,
        [name]: value,
      }));
    };

    return (
        <div>
          <HrNav />
          <div className="vh-100">
            {" "}
            {/* Add custom class for background color */}
            <div className="container mt-5">
              <div className="createBox p-4">
                <h2 className="mb-4">Edit Project</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                  {/* Project Name */}
                  <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                      Project Name:
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      className="form-control"
                      name='projectName'
                      value={projectName}
                      onChange={onInputChange}
                      placeholder="Enter project name"
                    /> 
                    
                  </div>
    
                  {/* Project Detail */}
                  <div className="mb-3">
                    <label htmlFor="projectDetail" className="form-label">
                      Project Detail:
                    </label>
                    {/* <textarea
                      id="projectDetail"
                      className="form-control"
                      value={projectDetail}
                      style={{ height: "150px" }}
                      onChange={(e) => setProjectDetail(e.target.value)}
                      placeholder="Enter project detail"
                      maxLength={600}
                      required
                    ></textarea> */}
                    <TextAreaForm maxCharacters={600}/>
                  </div>
    
    
                  {/* Application Starting Date */}
                  <div className="mb-3">
                    <label htmlFor="startingDate" className="form-label">
                      Application Starting Date:
                    </label>
                    <input
                      type="date"
                      id="startingDate"
                      className="form-control"
                      // value={formatDate(startingDate)}
                      onChange={onInputChange}
                      
                    />
                  </div>
    
                  {/* Application Closing Date */}
                  <div className="mb-3">
                    <label htmlFor="closingDate" className="form-label">
                      Application Closing Date:
                    </label>
                    <input
                      type="date"
                      id="closingDate"
                      className="form-control"
                      // value={formatDate(startingDate)}
                      onChange={(e) => setProject(e)}
                      
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="projectSalary" className="form-label">
                      Salary:
                    </label>
                    <input
                      type="number"
                      id="projectSalary"
                      className="form-control"
                      value={salary}
                      onInput={(e) => {
                        const enteredValue = e.target.value;
                        // Check if the entered value is negative
                        if (enteredValue < 0) {
                          // If negative, set the value to 0
                          setProjectSalary(0);
                        } else {
                          // If non-negative, update the state with the entered value
                          setProjectSalary(enteredValue);
                        }
                      }}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="projectPosition" className="form-label">
                      Position:
                    </label>
                    <input
                      type="text"
                      id="projectPosition"
                      className="form-control"
                      value={position}
                      placeholder="Enter position"
                      onChange={(e) => setProject(e)}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="projectAmount" className="form-label">
                      Amount:
                    </label>
                    <input
                      type="number"
                      id="projectAmount"
                      className="form-control"
                      value={amount}
                      onInput={(e) => {
                        const enteredValue = e.target.value;
                        // Check if the entered value is negative
                        if (enteredValue < 0) {
                          // If negative, set the value to 0
                          setProject(0);
                        } else {
                          // If non-negative, update the state with the entered value
                          setProject(enteredValue);
                        }
                      }}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="projectEducation" className="form-label">
                      Project Education:
                    </label>
                    <select
                      id="projectEducation"
                      className="form-control"
                      value={educationLevel}
                    onChange={onInputChange}
                    >
                      <option value="">Select Education</option>
                      <option value="HIGH_SCHOOL">High School</option>
                      <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
                      <option value="MASTERS_DEGREE">Master's Degree</option>
                      <option value="PHD">PhD</option>
                    </select>
                  </div>
    
                  {/* Project Image */}
                  {/* <div className="mb-3">
                    <label htmlFor="projectImage" className="form-label">
                      Project Image URL:
                    </label>
                    <input
                      type="file"
                      id="projectImage"
                      className="form-control"
                      onChange={(e) => setProjectImage(e.target.files[0])}
                      required={false}
                    />
                  </div> */}
    
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-warning link-light text-dark mb-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      );
    }
    
