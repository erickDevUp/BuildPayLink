
import { useCallback, useState } from "react";
import styles from "../../../styles/Home.module.scss";

const PaymentEdit = (props) => {

  const changeValue = useCallback(
    (e) => {
      props.setValor((valor) => [
        ...valor.map((v) =>
          v.label == props.label
            ? {
                ...v,
                value: e.target.value,
              }
            : v
        ),
      ]);
    },
    [props]
  );

    return (
    <div className="w-100">
      <div
        className={
          styles.payment_btn +
          " d-flex justify-content-between align-items-center"
        }
      >
        <img
          src={props.img}
          alt={props.label + " logo"}
          className={styles.payment_img}
        />
        <input
          type="text"
          className={
            styles.hero_edit_input +
            " d-flex justify-content-between align-items-center text-center btn"
          }
          onChange={(e) => changeValue(e)}
          value={props.valor.value}
          placeholder={props.label}
        />
      </div>
    </div>
  );
};

export default PaymentEdit;
