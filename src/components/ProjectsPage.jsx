import React from "react";

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

export default function ProjectsPage() {
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
