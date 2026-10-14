import React from "react";

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

export default function ServicesPage() {
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
