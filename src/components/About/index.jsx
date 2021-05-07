import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';


function About() {
  const matches = useMediaQuery('(min-width:900px)');

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
            <div className="col-12 d-flex justify-content-center">
              <div className="row d-flex justify-content-center w-100">
                <img className="col-xs-12 col-md-2" src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript" alt="javascript" />
                <img className="col-xs-12 col-md-2" src="https://img.shields.io/badge/-Nodejs-black?style=for-the-badge&logo=Node.js" alt="node" />
                <img className="col-xs-12 col-md-2" src="https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logo=mysql" alt="MySQL" />
                <img className="col-xs-12 col-md-2" src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react" alt="react" />
                <img className="col-xs-12 col-md-2" src="https://img.shields.io/badge/-Bootstrap-black?style=for-the-badge&logo=bootstrap" alt="bootstrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border rounded mt-5 indCards p-3">
        <div className="col-12 d-flex justify-content-center p-2">
          <div className="row d-flex justify-content-center">
            <p className="col-12 text-center">GitHub Stats</p>
            <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-2">
              <img style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'contain' }} className="" src="https://github-readme-stats.vercel.app/api?username=sfoxgit&theme=blue-green" alt="github stats"></img>
            </div>
            <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-2">
              <img style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'contain' }} className="" src="https://github-readme-streak-stats.herokuapp.com/?user=sfoxgit&theme=blue-green" alt="github streak"></img>
            </div>
            <div className="col-12 d-flex justify-content-center mt-4">
              {matches ?
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sfoxgit&theme=blue-green" alt="Top Langs" />
                :
                <img style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'contain' }} src="https://github-readme-stats.vercel.app/api/top-langs/?username=sfoxgit&theme=blue-green" alt="Top Langs" />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;