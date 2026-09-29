import { useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import resumeFile from "./Liam resume.pdf";
import personalImage from "./liampick.jpg";
import logoImage from "./logo thing.png";

function NavigationBar() {
  return (
    <header className="site-header">
      <nav className="navigation container">
        <div className="brand">
          <Link
            to="/"
            className="brand-logo-link"
            aria-label="Liam Armstrong home page"
            title="Liam Armstrong"
          >
            <img
              src={logoImage}
              alt="Liam Armstrong logo"
              className="logo-image"
            />
          </Link>

          <Link to="/" className="brand-name">
            Liam Armstrong
          </Link>
        </div>

        <div className="navigation-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/references">References</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Liam Armstrong. All rights reserved.</p>
    </footer>
  );
}

function HomePage() {
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

function AboutPage() {
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

const projects = [
  {
    title: "Database Concepts Group Project",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    description:
      "Collaborated as part of a four-person team to design and develop a database project requiring tasks to be completed in a specific sequence.",
    role: "Team Member and Database Developer",
    outcome:
      "Worked with team members to ensure proper coordination and communication while completing database-related tasks. Applied database concepts and problem-solving skills to address dependencies and prevent errors within the project.",
    completionDate: "2026",
  },
  {
    title: "Web Development – Website Building",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    description:
      "Built small-scale connected websites using HTML and web development concepts while working with unique images, colors, and layouts.",
    role: "Front-End Developer",
    outcome:
      "Applied attention to detail when organizing website content and visual elements to create websites tailored to specific requirements.",
    completionDate: "2026",
  },
  {
    title: "Small Web Games Collection",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
    description:
      "Created a group of small web games using basic programming concepts, including logic, user interaction, conditions, variables, and simple game mechanics.",
    role: "Student Developer",
    outcome:
      "Built multiple interactive mini-games using HTML, CSS, and JavaScript to practice problem-solving and frontend development fundamentals.",
    completionDate: "2025",
  },
];

function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">MY WORK</p>
        <h1>Featured Projects</h1>

        <div className="card-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={`${project.title} project preview`}
              />

              <div className="card-content">
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <p>
                  <strong>My role:</strong> {project.role}
                </p>

                <p>
                  <strong>Outcome:</strong> {project.outcome}
                </p>

                <p>
                  <strong>Completed:</strong> {project.completionDate}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Web Development",
    icon: "💻",
    description:
      "Building responsive websites and web applications using HTML, CSS, JavaScript, React, and modern development practices.",
  },
  {
    title: "UI Design",
    icon: "🎨",
    description:
      "Creating clean, attractive, and user-friendly interfaces with clear layouts, consistent styling, and accessible design.",
  },
  {
    title: "Responsive Design",
    icon: "📱",
    description:
      "Designing websites that work properly on phones, tablets, laptops, and desktop computers.",
  },
  {
    title: "Website Maintenance",
    icon: "🛠️",
    description:
      "Updating website content, correcting errors, improving layouts, and maintaining existing websites.",
  },
];

function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">WHAT I OFFER</p>
        <h1>My Services</h1>

        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const references = [
  {
    name: "Jane Smith",
    company: "ABC Company",
    position: "Project Manager",
    testimonial:
      "Liam Armstrong was reliable, creative, and committed to completing the project successfully.",
  },
  {
    name: "Michael Brown",
    company: "XYZ Organization",
    position: "Team Leader",
    testimonial:
      "Liam Armstrong demonstrated strong communication skills, professionalism, and a willingness to learn.",
  },
  {
    name: "Alex Johnson",
    company: "Creative Studio",
    position: "Senior Designer",
    testimonial:
      "Liam Armstrong completed the work professionally and showed excellent attention to detail.",
  },
];

function ReferencesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">RECOMMENDATIONS</p>
        <h1>References</h1>

        <div className="card-grid">
          {references.map((reference) => (
            <article className="reference-card" key={reference.name}>
              <p className="quote">“{reference.testimonial}”</p>

              <h2>{reference.name}</h2>

              <p>
                {reference.position}, {reference.company}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const hasEmptyField = Object.values(formData).some(
      (fieldValue) => fieldValue.trim() === ""
    );

    if (hasEmptyField) {
      setFormMessage("Please complete all fields before submitting.");
      return;
    }

    setFormMessage("Thank you! Your message has been received.");

    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <section className="section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>Contact Me</h1>

          <p>
            Complete the form and I will review your message as soon as
            possible.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:liamninearmstrong@gmail.com">
                liamninearmstrong@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+14319986868">4319986868</a>
            </p>

            <p>
              <strong>Location:</strong> Scarborough, Toronto, Ontario, Canada
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          />

          <label htmlFor="lastName">Last Name</label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          />

          <label htmlFor="phoneNumber">Contact Number</label>

          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Example: 4319986868"
            required
          />

          <label htmlFor="emailAddress">Email Address</label>

          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Example: liamninearmstrong@gmail.com"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          />

          <button className="button primary-button" type="submit">
            Send Message
          </button>

          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="error-page">
      <h1>Page Not Found</h1>

      <p>The page you are looking for does not exist.</p>

      <Link className="button primary-button" to="/">
        Return Home
      </Link>
    </section>
  );
}

function App() {
  return (
    <>
      <NavigationBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;