import React from "react";
import Project from "../../Projects";
import Container from "../Container"

function Frontend() {

  const projects = Project.filter(project => project.categories.includes("frontEnd"))

  return (
    <>
      {projects.map(front => (
        <Container item={front} />
      ))}
    </>
  )
}

export default Frontend;