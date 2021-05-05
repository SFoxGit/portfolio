import React, { useState, useEffect } from "react";
import Project from "../../Projects";
import Container from "../Container"

function Frontend() {
  const [projects, setProjects] = useState([]);
  const [display, setDisplay] = useState("Sort by oldest")

  function sortAscending(proj) {
    setProjects(proj.sort((a, b) => {
      let fa = a.startDate;
      let fb = b.startDate;
      if (fa < fb) {
        return 1
      };
      if (fb < fa) {
        return -1
      };
      return null;
    }))
  }

  function sortDescending(proj) {
    setProjects(proj.sort((a, b) => {
      let fa = a.startDate;
      let fb = b.startDate;
      if (fa < fb) {
        return -1
      };
      if (fb < fa) {
        return 1
      };
      return null;
    }));
  }

  const sortAsc = (event) => {
    event.preventDefault();
    if (display === "Sort by oldest") {
      sortDescending(projects)
      setDisplay("Sort by newest")
    } else {
      sortAscending(projects)
      setDisplay("Sort by oldest")
    }
  }
  const soloP = async (event) => {
    event.preventDefault();
    const unsorted = Project.filter(project => project.categories.includes("frontEnd"));
    const solo = unsorted.filter(project => !project.categories.includes("group"));
    if (display === "Sort by oldest") {
      sortAscending(solo)
    } else {
      sortDescending(solo)
    }
  }
  const groupP = async (event) => {
    event.preventDefault();
    const unsorted = Project.filter(project => project.categories.includes("frontEnd"));
    const solo = unsorted.filter(project => project.categories.includes("group"));
    if (display === "Sort by oldest") {
      sortAscending(solo)
    } else {
      sortDescending(solo)
    }
  }
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
      <div className="row border rounded m-3 indCards p-3 justify-content-around">
        <button onClick={(e) => sortAsc(e)} type="click" className="btn">{display}</button>
        <button onClick={(e) => soloP(e)} type="click" className="btn">Solo Projects</button>
        <button onClick={(e) => groupP(e)} type="click" className="btn">Group Projects</button>
      </div>
      {projects.map(front => (
        <Container key={front.name} item={front} />
      ))}
    </>
  )
}

export default Frontend;