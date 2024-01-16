import React, { useState } from 'react';

const TextAreaForm = () => {
  const [projectDetail, setProjectDetail] = useState('');

  const maxCharacters = 600;

  const handleProjectDetailChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharacters) {
      setProjectDetail(inputValue);
    }
  };

  const remainingCharacters = maxCharacters - projectDetail.length;

  return (
    <div>
      {/* Project Detail */}
      <div className="mb-3">
        <label htmlFor="projectDetail" className="form-label">
          Project Detail:
        </label>
        <textarea
          id="projectDetail"
          className="form-control"
          value={projectDetail}
          style={{ height: '150px' }}
          onChange={handleProjectDetailChange}
          placeholder="Enter project detail"
          maxLength={maxCharacters}
          required
        ></textarea>
        <small className="form-text text-muted">
          {remainingCharacters} characters remaining (max {maxCharacters})
        </small>
      </div>
    </div>
  );
};

export default TextAreaForm;
