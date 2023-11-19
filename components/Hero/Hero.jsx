import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import { Wrapper, Rocket } from "../index";
import Perfil from "../../public/perfil.png";
import Focus from "../../public/focus.svg";
import Target from "../../public/target.svg";

export const Hero = () => {
  return (
    <section className={style.hero} aria-label="Hero Tania Katherine Rocha Hueso">
      <Wrapper>
        <div className={style.content}>
          <div className={style.wrapperPhoto}>
            <div className={style.focus}>
              <Image src={Focus} alt="Focus decorate" title="Focus decorate" />
            </div>

            <div className={style.target}>
              <Image
                src={Target}
                alt="Target decorate"
                title="Target decorate"
              />
            </div>

            <Image
              src={Perfil}
              alt="Tania Katherine Rocha Hueso"
              title="Tania Katherine Rocha Hueso"
            />
          </div>
          <div className={style.information}>
            <Rocket />
            <p className={style.name}>Tania Katherine Rocha Hueso</p>
            <h1 className={style.title}>
              <strong className={style.highlightBlue}>Developer</strong>{" "}
            </h1>
            <p className={style.description}>
            ¡Hola! Soy Tania, una desarrolladora altamente motivada y apasionada por la
            programación.
            </p> 
            <p className={style.description}>
            *Soy dedicada, comprometida y entusiasta por desarrollar y modelar aplicaciones web.
            </p>
            <p className={style.description}>
            *Tambien realizo procesos de automatización de pruebas para obtener aplicaciones de software de alta calidad. 
            </p>
            <p className={style.description}>
            *Poseo sólidos conocimientos y tengo un enfoque orientado a resolver problemas, ademas de ello me gusta trabajar en equipo 
            y aprender rápidamente.
            </p>
            <br></br>
            <a className={style.button} href="#contact">
              Contactame
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
