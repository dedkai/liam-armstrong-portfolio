import React from "react";

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

export default function ReferencesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">RECOMMENDATIONS</p>
        <h1>References</h1>

        <div className="card-grid">
          {references.map((reference) => (
            <article className="reference-card" key={reference.name}>
              <p className="quote">"{reference.testimonial}"</p>

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
