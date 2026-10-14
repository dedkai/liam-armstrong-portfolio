import React from "react";
import personalImage from "../liampick.jpg";
import resumeFile from "../Liam resume.pdf";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About Me</p>
          <h1>Get to know me</h1>

          <img
            className="profile-image"
            src={personalImage}
            alt="Professional headshot of Liam Armstrong"
          />
        </div>

        <div className="content-card">
          <h2>Liam Armstrong</h2>

          <p>
            I am an aspiring software engineering student based in Scarborough,
            Toronto, Ontario, Canada. I am interested in web development,
            frontend design, and building user-friendly digital experiences.
          </p>

          <p>
            I enjoy learning new technologies and creating projects that
            improve how people interact with information online. My goal is to
            continue developing my technical skills and become a professional
            software engineer.
          </p>

          <p>
            Through my studies and personal projects, I am building experience
            with React, JavaScript, HTML, CSS, responsive design, databases,
            and frontend application development.
          </p>

          <a
            className="button primary-button"
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
