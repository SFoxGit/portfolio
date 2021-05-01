import React, { useState, useEffect } from "react";
import Project from "../../Projects";
import Container from "../Container"

function Frontend() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsorted = Project.filter(project => project.categories.includes("frontEnd"));
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
      {projects.map(front => (
        <Container key={front.name} item={front} />
      ))}
    </>
  )
}

export default Frontend;