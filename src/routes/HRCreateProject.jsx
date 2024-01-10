import React, { useState } from 'react';
import NavBar from "../component/navBar";
import Footer from "../component/footer";

function HRCreateProject() {
  // State for form fields
  const [projectName, setProjectName] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [projectSalary, setProjectSalary] = useState(0.00);
  const [projectPosition, setProjectPosition] = useState('');
  const [projectImage, setProjectImage] = useState('');

  // const [HREmails, setHREmails] = useState(['']);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with form data (e.g., submit to server)
    // ...

    // Reset form fields after submission
    setProjectName('');
    setProjectDetail('');
    setStartingDate('');
    setClosingDate('');
    setProjectImage('');
    setHREmails(['']);
  };

  
  return (
    <div className="Body bg-light"> {/* Add custom class for background color */}
      <div className="container mt-5">
        <div className="createBox p-4">
          <h2 className="mb-4">Create Project</h2>
          <form onSubmit={handleSubmit}>
            {/* Project Name */}
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">Project Name:</label>
              <input
                type="text"
                id="projectName"
                className="form-control"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder='Enter project name'
                required
                />
            </div>

            {/* Project Detail */}
            <div className="mb-3">
              <label htmlFor="projectDetail" className="form-label">Project Detail:</label>
              <textarea
                id="projectDetail"
                className="form-control"
                value={projectDetail}
                style={{ height: '150px' }}
                onChange={(e) => setProjectDetail(e.target.value)}
                placeholder='Enter project detail'
                required
                >
              </textarea>
            </div>

            {/* Application Starting Date */}
            <div className="mb-3">
              <label htmlFor="startingDate" className="form-label">Application Starting Date:</label>
              <input
                type="date"
                id="startingDate"
                className="form-control"
                // value={formatDate(startingDate)}
                onChange={(e) => setStartingDate(e.target.value)}
                required
                />
            </div>

            {/* Application Closing Date */}
            <div className="mb-3">
              <label htmlFor="closingDate" className="form-label">Application Closing Date:</label>
              <input
                type="date"
                id="closingDate"
                className="form-control"
                // value={formatDate(startingDate)}
                onChange={(e) => setClosingDate(e.target.value)}
                required
                />
            </div>

            {/* Project Image */}
            <div className="mb-3">
              <label htmlFor="projectImage" className="form-label">Project Image URL:</label>
              <input
                type="file"
                id="projectImage"
                className="form-control"
                value={projectImage}
                onChange={(e) => setProjectImage(e.target.value)}
                />
            </div> 

            <div className="mb-3">
              <label htmlFor="projectSalary" className='form-label'>Salary</label>
              <input 
                type="number"
                id="projectSalary"
                className="form-control"
                value={projectSalary}
                onChange={(e) => setProjectSalary(e.target.value)}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="projectPosition" className='form-label'>Position</label>
              <input 
                type="text"
                id="projectPosition"
                className="form-control"
                value={projectPosition}
                onChange={(e) => setProjectPosition(e.target.value)}
                />
            </div>
            {/* HR Email List
            <div className="mb-3">
            <label htmlFor="HREmailList" className="form-label">HR permissions email list:</label>
            {HREmails.map((email, index) => (
              <div key={index} className="mb-2">
              <input
                    type="text"
                    id={`HREmailList${index}`}
                    className="form-control"
                    value={email}
                    onChange={(e) => handleHREmailChange(index, e.target.value)}
                    placeholder={(index == 0) ? `Enter your email` : `Enter other HR email`}
                    required
                    />
                    </div>
                    ))}
                    <button type="button" className="btn btn-secondary" onClick={addHREmailInput}>Add Email</button>
                  </div> */}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Create Project</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default HRCreateProject;

// const handleHREmailChange = (index, value) => {
//   const newEmails = [...HREmails];
//   newEmails[index] = value;
//   setHREmails(newEmails);
// };

// Function to add a new email input
// const addHREmailInput = () => {
//   setHREmails([...HREmails, '']);
// };

// function formatDate(date) {
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// }