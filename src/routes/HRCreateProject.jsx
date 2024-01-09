import React, { useState } from 'react';
import NavBar from "../component/navBar";
import Footer from "../component/footer";

function HRCreateProject() {
  // State for form fields
  const [projectName, setProjectName] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [HREmails, setHREmails] = useState(['']);

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

  const handleHREmailChange = (index, value) => {
    const newEmails = [...HREmails];
    newEmails[index] = value;
    setHREmails(newEmails);
  };

  // Function to add a new email input
  const addHREmailInput = () => {
    setHREmails([...HREmails, '']);
  };

  return (
    <div className="Body bg-light"> {/* Add custom class for background color */}
      <NavBar />
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
                required
                
              ></textarea>
            </div>

            {/* Application Starting Date */}
            <div className="mb-3">
              <label htmlFor="startingDate" className="form-label">Application Starting Date:</label>
              <input
                type="date"
                id="startingDate"
                className="form-control"
                value={startingDate}
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
                value={closingDate}
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

            {/* HR Email List */}
            <div className="mb-3">
              <label htmlFor="HREmailList" className="form-label">HR email list:</label>
              {HREmails.map((email, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    id={`HREmailList${index}`}
                    className="form-control"
                    value={email}
                    onChange={(e) => handleHREmailChange(index, e.target.value)}
                    required
                  />
                </div>
              ))}
              <button type="button" className="btn btn-secondary" onClick={addHREmailInput}>Add Email</button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Create Project</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default HRCreateProject;
