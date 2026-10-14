import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero section">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hello, I&apos;m <span className="highlight">Liam</span>
            <span className="highlight-block">Armstrong</span>
          </h1>

          <p className="hero-text">
            I am an aspiring software engineering student who is learning to
            create clean, responsive, and user-friendly digital experiences.
          </p>

          <div className="button-group">
            <Link className="button primary-button" to="/about">
              Learn About Me
            </Link>

            <Link className="button secondary-button" to="/projects">
              View My Projects
            </Link>
          </div>
        </div>

        <div className="mission-card">
          <h2>My Mission</h2>

          <p>
            My mission is to develop practical software solutions that are
            accessible, reliable, and easy to use. I am committed to
            continuously improving my programming skills while creating
            meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
