import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav'
import HrProjectBox from '../component/HrProjectBox'
import axios from 'axios';
export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);

  // useEffect(() => {
  //   // axios.get('http://localhost:8080/')
    
  //   fetch("http://localhost:8080/project/")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setHrProjects(data))
  //     .catch((error) => console.error('Error fetching HR projects:', error));
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/project/')
      .then((response) => setHrProjects(response.data))
      .catch((error) => console.error('Error fetching HR projects:', error));
  }, []);

  return (
    <div>
        <HrNav/>
        {hrProjects.map((project) => (
        <HrProjectBox key={project.id} project={project} />
      ))}
    </div>
  )
}
