import React from "react";

function Contact() {

  return (
    <div className="col-xs-12 col-lg-8  p-2">
      <div className="row border border-primary rounded m-3 indCards p-3">
        <div className="col-xs-12 col-lg-12 text">
          <div className="row">
            <div className="col-xs-12 col-lg-12 d-flex justify-content-around align-items-center">
              <a className=""
                href="https://www.linkedin.com/in/shawn-fox-350772208/"><i className="fab fa-linkedin-in icons m-3"></i></a>
                                shawn-fox-350772208
                                <a className="" href="https://www.github.com/SFoxGit"><i className="fab fa-github icons m-3"></i></a>
                                SFoxGit
                            </div>
            <div className="col-xs-12 col-lg-12 d-flex justify-content-around  align-items-center">
              <a href="mailto:sfoxss4@gmail.com"><i className="far fa-envelope icons m-3"></i></a>
                                SFoxss4@gmail.com
                                <a href="tel:607-333-5508"><i className="fas fa-phone icons m-3"></i></a>
                                607-333-5508
                            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;