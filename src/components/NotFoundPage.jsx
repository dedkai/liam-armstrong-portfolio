import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
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
