import React from "react";

function Container(props) {
  return (

    <div className="row border rounded m-3 indCards p-3">
      <div className="col-12 d-flex justify-content-center p-2">
        <a href={props.item.deployed}>
          <img className="img-fluid rounded mx-auto d-block" src={props.item.image}
            alt="deployed site" />
        </a>
      </div>
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <h2>{props.item.name}</h2>
        <p>{props.item.description} Click the above image to go to
        the diployed site, or <a href={props.item.github}>here</a> to go
        to
        the GitHub repo.</p>
      </div>
    </div>

  )
}

export default Container