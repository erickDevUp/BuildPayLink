import React from "react";
import styles from "../../../styles/Home.module.scss"


function Hero(props) {

  

  return (
    <section className="d-flex flex-column align-items-center pt-2 mb-1">      
      <img src={props.src} alt={props.alt} className={styles.hero_image+" mb-1 my-4"} />
      <div className="pt-3">
        <h3 className="mb-1 text-center">{props.name}</h3>
        <p className="text-center text-center">{props.description}</p>
      </div>
    </section>
  );
}

export default Hero;
