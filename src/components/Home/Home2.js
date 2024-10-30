import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/emma.png"; // Replace with your image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming and have gained a lot of experience
              in the field over the years.
              <br />
              <br />I am skilled in technologies like
              <i>
                <b className="purple"> C, C++, JavaScript, Python, and PHP. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing &nbsp;
              <i>
                <b className="purple">Web Applications and AI Solutions</b> and 
                working on projects related to{" "}
                <b className="purple">Software Engineering</b> and 
                <b className="purple"> Full-Stack Development.</b>
              </i>
              <br />
              <br />
              I enjoy working with <b className="purple">Node.js</b> and 
              modern frameworks like 
              <i>
                <b className="purple"> React.js, Laravel, and Spring Boot</b>, 
              </i>{" "}
              always seeking to build innovative solutions.
              <br />
              <br />
              In addition to full-stack development, I also have a strong passion for{" "}
              <b className="purple">DevOps</b>, where I enjoy setting up CI/CD pipelines 
              with tools like Jenkins. I love integrating web technologies using{" "}
              <b className="purple">CSS, Bootstrap, and SASS</b> to create modern and responsive 
              user interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
             
              <h4> MY number +33 7 60 76 59 59 </h4>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EmnaAbbessi" // Your GitHub link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emna-abbassi-482993218/" // Your LinkedIn link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
