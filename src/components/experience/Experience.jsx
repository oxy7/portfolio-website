import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>SKills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>JAVASCRIPT</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>HTML</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>CSS</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>Version Control</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>UX</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>SEO</h3>
              </div>
            </article>
          </div>
        </div>

        {/* =========== END OF FRONTEND ============== */}

        <div className="experience__backend">
          <h3>Backend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>MySQL</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>PHP</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>API</h3>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>PYTHON</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
