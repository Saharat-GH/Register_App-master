import React, { useState } from 'react';
import NavBar from "../component/navBar";
import Footer from "../component/footer";

function HRCreateProject() {
  // State for form fields
  const [projectName, setProjectName] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [projectImage, setProjectImage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with form data (e.g., submit to server)
    // ...

    // Reset form fields after submission
    setProjectName('');
    setProjectDetail('');
    setClosingDate('');
    setProjectImage('');
  };

  return (
    <div className="Body">
      <NavBar />
      <div className="createBox">
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit}>
          {/* Project Name */}
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

          {/* Project Detail */}
          <label htmlFor="projectDetail">Project Detail:</label>
          <textarea
            id="projectDetail"
            value={projectDetail}
            onChange={(e) => setProjectDetail(e.target.value)}
            required
          ></textarea>

          {/* Application Closing Date */}
          <label htmlFor="closingDate">Application Closing Date:</label>
          <input
            type="date"
            id="closingDate"
            value={closingDate}
            onChange={(e) => setClosingDate(e.target.value)}
            required
          />

          {/* Project Image */}
          <label htmlFor="projectImage">Project Image URL:</label>
          <input
            type="text"
            id="projectImage"
            value={projectImage}
            onChange={(e) => setProjectImage(e.target.value)}
          />

          {/* Submit Button */}
          <button type="submit">Create Project</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default HRCreateProject;
