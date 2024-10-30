import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emna Abbassi</span> 
            from <span className="purple">Tunisia</span>.
            <br />
            I am a final-year computer engineering student currently on an exchange semester in 
            <span className="purple"> Germany</span>.
            <br />
            I am passionate about coding, and have gained experience working with a range of technologies like MERN, Spring Boot, and Laravel.
            <br />
            <br />
            Besides coding, here are some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing and Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep chasing your passions and build meaningful things!"{" "}
          </p>
          <footer className="blockquote-footer">Emna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
