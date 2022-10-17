import Image from "next/image";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ConfigCtx from "../../../context/configEdit";
import styles from "../../../styles/Home.module.scss";
import ImgUpload from "./ImgUpload";

function HeroEdit(props) {
  const { Config, setConfig } = useContext(ConfigCtx);

  const [valor, setValor] = useState({});
  const [form,setForm]=useState()

  useEffect(() => {
    setValor({ ...valor, fullname: props.name, desc: props.description, img:'./images/daniel-castillo.png' });
  }, [props]);

  const saveEdit = useCallback(
    async(save) => {
      if (save) {


       await fetch("/api/uploadImg", {
          method: "POST",
          body: form
        });

        setConfig({
          ...Config,
          properties: {
            ...Config.properties,
            name: valor.fullname,
            description: valor.desc,
            alt: "Photo of " + valor.fullname,
            hero:valor.img
          },
        });
      } else {
        setValor({ ...valor, fullname: props.name, desc: props.description,img:'./images/daniel-castillo.png '});
      }
    },
    [valor, Config]
  );


  return (
    <section className="d-flex flex-column align-items-center my-4 ">
      <ImgUpload props={props} valor={valor} setValue={setValor} setForm={setForm}/>
      <div className={styles.hero_edit + " pt-3"}>
        <h6>Name: </h6>
        <input
          type="text"
          className={
            styles.payment_btn +
            " " +
            styles.hero_edit_input +
            " d-flex justify-content-between align-items-center mb-1 text-center btn"
          }
          onChange={(e) => {
            setValor({ ...valor, fullname: e.target.value });
          }}
          value={valor.fullname}
          placeholder="name"
        />
        <h6>Description: </h6>
        <textarea
          className={
            styles.payment_btn +
            " " +
            styles.hero_edit_input+" "+
            styles.hero_edit_trextArea +
            " d-flex justify-content-between align-items-center btn"
          }
          onChange={(e) => setValor({ ...valor, desc: e.target.value })}
          value={valor.desc}
          placeholder="description"
        />
      </div>


      <div className="d-flex  justify-content-center align-items-center ">
        <button
          onClick={() => saveEdit(true)}
          className={styles.btn_primary+' '+styles.btn_edit + " btn"}
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Save
        </button>
        <button
          onClick={() => saveEdit(false)}
          className={styles.btn_primary +' '+styles.btn_edit+ " btn"}
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default HeroEdit;
