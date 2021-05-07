import React from "react";

function About() {

  return (
    <>
      <div className="row border rounded mt-5 indCards p-3">
        <div className="col-12 d-flex justify-content-center p-2">
          <div className="row d-flex">
            <p>My name is Shawn Fox, I am a full-stack web developer currently residing in the Charlotte NC area but am open to relocation.</p>
            <p>I have over a decade of very successful experience in the sales world. I tackled a wide variety of industries in that time ranging from the Oil and Gas industry, to cars, even to vinyl records.</p>
            <p>In 2021 I decided to seek a career change into something I could be passionate about. Coding drew me in thanks to it primarly being logic based. It seemed less like work and more like playing constant logic based puzzle games. Once I got passed HTML and CSS and into Javascript, I was hooked. This is just plain fun to me, and I can't get enough of it.</p>

          </div>
        </div>
      </div>
      <div className="row border rounded mt-5 indCards p-3">
        <div className="col-12 d-flex justify-content-center p-2">
          <div className="row d-flex">
            <p className="col-12 text-center">My Top Five Tools</p>
            <div className="col-12 d-flex justify-content-between">
              <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript" alt="javascript" />
              <img src="https://img.shields.io/badge/-Nodejs-black?style=for-the-badge&logo=Node.js" alt="node" />
              <img src="https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logo=mysql" alt="MySQL" />
              <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react" alt="react" />
              <img src="https://img.shields.io/badge/-Bootstrap-563D7C?style=for-the-badge&logo=bootstrap" alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border rounded mt-5 indCards p-3">
        <div className="col-12 d-flex justify-content-center p-2">
          <div className="row d-flex justify-content-center">
            <p className="col-12 text-center">GitHub Stats</p>
            <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-2">
              <img className="" src="https://github-readme-stats.vercel.app/api?username=sfoxgit&theme=blue-green" alt="github stats"></img>
            </div>
            <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-2">
              <img className="" src="https://github-readme-streak-stats.herokuapp.com/?user=sfoxgit&theme=blue-green" alt="github streak"></img>
            </div>
            <div className="col-12 d-flex justify-content-center mt-4">
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sfoxgit&theme=blue-green" alt="Top Langs" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;