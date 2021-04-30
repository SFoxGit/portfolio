import React from "react";
import Project from "../../Projects"

function Frontend() {

  const projects = Project.filter(project => project.categories.includes("frontEnd"))

  return (
    <>
      {projects.map(front => (
        <div>{front.name}</div>)
      )}
    </>
  )
}

export default Frontend;