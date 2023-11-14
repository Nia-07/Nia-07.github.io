import React, { useState, useRef } from "react";
import style from "./Projects.module.css";
import { Wrapper, Title, Starts, ProjectCard, SliderProjects } from "../index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Projects = ({ projects }) => {
  const slideRef = useRef();

  const next = () => {
    slideRef.current.slickPrev();
  };

  const prev = () => {
    slideRef.current.slickNext();
  };
  return (
    <section className={style.projects} aria-label="My Projects" id="project">
      <Wrapper>
        <div className={style.content}>
          <div className={style.information}>
            <Title text="Mis" highlight="Proyectos" />
            <p className={style.description}>
             A continuación podras evidenciar los proyectos en los que he trabajado.
            </p>
          </div>
          <div className={style.listProjects}>
            <div className={style.listProjectsControls}>
              <button
                className={style.button}
                aria-label="Atrás"
                onClick={() => next()}
              >
                <FaArrowLeft />
              </button>
              <button
                className={style.button}
                aria-label="Siguiente"
                onClick={() => prev()}
              >
                <FaArrowRight />
              </button>
            </div>
            <div className={style.listProjectsContainer}>
              <SliderProjects slideRef={slideRef}>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SliderProjects>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
