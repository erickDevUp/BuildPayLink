import React from "react";
import Hero from "./components/hero/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";
//import Config from "../public/paylink.config.json";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import HeroEdit from "./components/hero/HeroEdit";
import SocialEdit from "./components/social-media/SocialEdit";
import Modal from "./components/modal";
import PaymentEdit from "./components/payments/PaymentEdit";
import { useContext } from "react";
import ConfigCtx from "../context/configEdit";
import { useEffect } from "react";
import AllSocialEdit from "./components/social-media/AllSocialEdit";
import AllPaymentEdit from "./components/payments/AllPaymentEdit";

import getConfig from "/public/paylink.config.json";
import Link from "next/link";
import SelectThemes from "./components/SelectThemes";
import { config } from "pages/api/uploadImg";

const configThema = (theme) => {
  let thema;
  switch (theme) {
    case "minimalist_dark_theme":
      thema = styles.minimalist_dark_theme;
      break;
    case "minimalist_theme":
      thema = styles.minimalist_theme;
      break;
    case "swordfest_dark_theme":
      thema = styles.swordfest_dark_theme;
      break;
    case "swordfest_theme":
      thema = styles.swordfest_theme;
      break;
  }
  return thema;
};

const PayLink = () => {
  const { Config, setConfig } = useContext(ConfigCtx);

  const [theme, setTheme] = useState(configThema(getConfig.theme));

  useEffect(() => {
    if (!Config) {
      return <>hi</>;
    } else {
      setTheme(configThema(Config.theme));
    }
  }, [Config]);

  const cancelConfig = () => {
    setConfig({
      ...Config,
      properties: {
        ...Config.properties,
        hero: "./images/daniel-castillo.png ",
      },
    });
  };
  const saveConfig = async () => {
    const conf = {
      ...Config,
      properties: {
        ...Config.properties,
        hero: "./images/daniel-castillo.png ",
      },
    };
    await fetch("/api/saveConfig", {
      method: "POST",
      body: JSON.stringify({ ...conf }),
      headers: { "Content-type": "application/json" },
    });
  };
  return (
    <>
      <div className={theme}>
        <div className="d-flex justify-content-center align-items-center ">
          <Modal id="heroEdit">
            <HeroEdit
              src={Config.properties.hero}
              alt={Config.properties.alt}
              name={Config.properties.name}
              description={Config.properties.description}
            />
          </Modal>

          <Hero
            src={Config.properties.hero}
            alt={Config.properties.alt}
            name={Config.properties.name}
            description={Config.properties.description}
          />

          <button
            className={styles.btn_primary + " btn"}
            data-bs-toggle="modal"
            data-bs-target="#heroEdit"
          >
            Edit
          </button>
        </div>

        <section
          id="social-media"
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <Modal id="socialEdit">
            <AllSocialEdit Config={Config} />
          </Modal>
          {Config.Social.map(
            (i) =>
              i.link != "" && (
                <SocialMedia
                  label={i.label}
                  type={i.type}
                  href={i.link}
                  key={i.label}
                ></SocialMedia>
              )
          )}
          <button
            className={styles.btn_primary + " btn"}
            data-bs-toggle="modal"
            data-bs-target="#socialEdit"
          >
            Edit
          </button>
        </section>

        <section
          id={styles.payment_options}
          className="d-flex flex-column align-items-center pb-4"
        >
          {Config.Payments.map(
            (i) =>
              i.value != "" && (
                <Payment
                  id={i.id}
                  label={i.label}
                  img={i.img}
                  value={i.value}
                  key={i.id}
                ></Payment>
              )
          )}

          <Modal id="paymentEdit">
            <AllPaymentEdit Config={Config} />
          </Modal>
          <button
            className={styles.btn_primary + " btn"}
            data-bs-toggle="modal"
            data-bs-target="#paymentEdit"
          >
            Edit
          </button>

          <SelectThemes />

          <div className="d-flex  justify-content-center align-items-center ">
            <Link href={"/"}>
              <a
                onClick={() => saveConfig(true)}
                className={styles.btn_primary + " " + styles.btn_edit + " btn"}
              >
                Watch
              </a>
            </Link>
          </div>
          
          <a
            href="https://github.com/dlcastillop/paylink"
            target="_blank"
            className={styles.paylink_link + " my-3 text-decoration-none"}
          >
            <sub>
              Powered by <b>PayLink</b>
            </sub>
          </a>
        </section>
      </div>
    </>
  );
};
export default PayLink;
