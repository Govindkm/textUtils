import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://lh4.googleusercontent.com/-ccJFJ24GYL0/AAAAAAAAAAI/AAAAAAAAABE/EOYOZqcv_-8/photo.jpg"
              alt="Jane"
            />
            <div className="container">
              <h2>Govind Mishra</h2>
              <p className="title">Full Stack Developer</p>
              <p>
                Passionate Full stack developer with experience in Angular and
                React
              </p>
              <p>govindkm.sv@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/govind-kumar-950a93160/">
                  <button className="button">Linkedin</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s900-c-k-c0x00ffffff-no-rj"
              alt="Mike"
            />
            <div className="container">
              <h2>Harish Khan</h2>
              <p className="title">Educator</p>
              <p>Software Developer and Educator</p>
              <p>https://www.codewithharry.com/</p>
              <p>
                <a href="https://www.codewithharry.com/contact/">
                  <button className="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
