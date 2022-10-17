import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import styles from "../../../styles/Home.module.scss";

const SocialEdit = (props) => {
  const changeLink = useCallback(
    (e) => {
      props.setValor((valor) => [
        ...valor.map((v) =>
          v.type == props.type
            ? {
                ...v,
                link: e.target.value,
              }
            : v
        ),
      ]);
    },
    [props]
  );

  return (
    <div
      className={
        styles.payment_btn +
        " d-flex justify-items-center align-items-center text-center btn"
      }
    >
      <a className={styles.social_edit}>
        <i className={styles.social_icon + " bx bxl-" + props.type}></i>
      </a>
      <input
        type="text"
        className={
          styles.hero_edit_input +
          " d-flex justify-content-between align-items-center text-center btn"
        }
        onChange={(e) => changeLink(e)}
        value={props.valor.link}
        placeholder={"Example: https://" + props.type + ".com/name"}
      />
    </div>
  );
};

export default SocialEdit;
