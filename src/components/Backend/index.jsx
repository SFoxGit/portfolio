import React from "react";
import Project from "../../Projects";
import Container from "../Container"

function Backend() {

  const projects = Project.filter(project => project.categories.includes("backEnd"))

  return (
    <>
      {projects.map(back => (
        <Container key={back.name} item={back} />
      ))}
    </>
  )
}

export default Backend;