import React from "react";
import style from "./About.module.css";
import { Wrapper, Technologies, Title, DownArrow } from "../index";

export const About = () => {
  return (
    <section className={style.about} aria-label="About Me" id="about">
      <Wrapper>
        <div className={style.content}>
          <div className={style.resume}>
            <DownArrow />
            <div className={style.tecnologias}>
            <Title text="Usando" highlight="tecnologias" />
            <br></br>
            <Technologies/>
            </div>
            {/* <Title text="Sobre" highlight="Mí" />
            <p className={style.text}>
              ¡Hola! Soy Tania, una desarrolladora altamente motivada y 
              apasionada por la programación.
              <br />
              <br />
              Poseo sólidos conocimientos y tengo un enfoque orientado a
              resolver problemas, me gusta mucho el mundo del desarrollo web, 
              en especial el Front End.
            </p> */}
            </div>
            {/*<div className={style.tecnologias}>
            <Title text="Algunas" highlight="tecnologias" />
            <Technologies/>
          </div>*/}
        </div>
      </Wrapper>
    </section>
  );
};
