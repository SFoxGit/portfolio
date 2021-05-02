import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './style.css'

function Contact() {

  return (
      <Row className="row border rounded m-3 indCards p-3">
        <Col xs={12} className="col-xs-12 col-lg-12 text">
          <Row className="row">
            <Col xs={2} md={2} className="d-flex justify-content-start align-items-center contact">
              <a className="" href="https://www.linkedin.com/in/shawn-fox-350772208/"><i className="fab fa-linkedin-in icons m-3"></i></a>
            </Col>
            <Col xs={10} md={4} className="d-flex justify-content-start align-items-center contact">
              <div>shawn-fox-350772208</div>
            </Col>
            <Col xs={2} md={2} className="d-flex justify-content-start align-items-center contact">
              <a className="" href="https://www.github.com/SFoxGit"><i className="fab fa-github icons m-3"></i></a>
            </Col>
            <Col xs={10} md={4} className="d-flex justify-content-start align-items-center contact">
              <div>SFoxGit</div>
            </Col>
            <Col xs={2} md={2} className="d-flex justify-content-start align-items-center contact">
              <a href="mailto:sfoxss4@gmail.com"><i className="far fa-envelope icons m-3"></i></a>
            </Col>
            <Col xs={10} md={4} className="d-flex justify-content-start align-items-center contact">
              <div>SFoxss4@gmail.com</div>
            </Col>
            <Col xs={2} md={2} className="d-flex justify-content-start align-items-center contact">
              <a href="tel:607-333-5508"><i className="fas fa-phone icons m-3"></i></a>
            </Col>
            <Col xs={10} md={4} className="d-flex justify-content-start align-items-center contact">
              <div>607-333-5508</div>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

export default Contact;