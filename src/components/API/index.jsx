import React, { useState, useEffect } from "react";
import Project from "../../Projects";
import Container from "../Container";

function API() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsorted = Project.filter(project => project.categories.includes("API"));
    const sorted = unsorted.sort((a, b) => {
      let fa = a.startDate;
      let fb = b.startDate;
      if (fa < fb) {
        return 1
      };
      if (fb < fa) {
        return -1
      };
      return null;
    });
    setProjects(sorted);


  }, [])

  return (
    <>
      {projects.map(api => (
        <Container key={api.name} item={api} />
      ))}
    </>
  )
}

export default API;