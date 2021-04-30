import React from "react";
import Project from "../../Projects";
import Container from "../Container"

function Group() {

  const projects = Project.filter(project => project.categories.includes("group"))

  return (
    <>
      {projects.map(front => (
        <Container key={front.name} item={front} />
      ))}
    </>
  )
}

export default Group;