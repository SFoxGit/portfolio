import React, { useState, useEffect } from "react";
import Project from "../../Projects";
import Container from "../Container"

function Backend() {
  const [projects, setProjects] = useState([]);
  // const [display, setDisplay] = useState("Sort by oldest")

  // const sortAsc = (event) => {
  //   event.preventDefault();
  //   console.log("test")
  //   const descending = projects.sort((a, b) => {
  //     let fa = a.startDate;
  //     let fb = b.startDate;
  //     if (fa < fb) {
  //       return -1
  //     };
  //     if (fb < fa) {
  //       return 1
  //     };
  //     return null;
  //   });
  //   setProjects(descending);
  //   setDisplay("Sort by newest")
  // }

  useEffect(() => {
    const unsorted = Project.filter(project => project.categories.includes("backEnd"));
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
      {/* <button  onClick={(e) => sortAsc(e)} type="click" className="btn">{display}</button> */}
      {projects.map(back => (
        <Container key={back.name} item={back} />
      ))}
    </>
  )
}

export default Backend;