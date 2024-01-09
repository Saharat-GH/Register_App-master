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
                onChange={(e) => setProjectDetail(e.target.value)}
                required
              ></textarea>
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
              <label htmlFor="projectImage" className="form-label">Project Image:</label>
              <input
                type="file"
                id="projectImage"
                className="form-control"
                onChange={handleImageChange}
                accept="image/*"
              />

              {/* Placeholder for the image size */}
              {projectImage && (
                <div className="mt-2">
                  <p>Image Preview:</p>
                  <img
                    src={URL.createObjectURL(projectImage)}
                    alt="Project Preview"
                    className="img-fluid rounded"
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                </div>
              )}
            </div>


            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Create Project</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HRCreateProject;
