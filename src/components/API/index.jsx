import React from "react";
import Project from "../../Projects";
import Container from "../Container";

function API() {

  const projects = Project.filter(project => project.categories.includes("API"))

  return (
    <>
      {projects.map(api => (
        <Container key={api.name} item={api} />
      ))}
    </>
  )
}

export default API;