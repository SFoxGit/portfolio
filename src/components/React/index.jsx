import React from "react";
import Project from "../../Projects";
import Container from "../Container";

function Reactpage() {

  const projects = Project.filter(project => project.categories.includes("React"))

  return (
    <>
      {projects.map(react => (
        <Container key={react.name} item={react} />
      ))}
    </>
  )
}

export default Reactpage;