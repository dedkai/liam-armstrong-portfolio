import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavigationBar,
  Footer,
  HomePage,
  AboutPage,
  ProjectsPage,
  ServicesPage,
  ReferencesPage,
  ContactPage,
  NotFoundPage,
} from "./components";

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
