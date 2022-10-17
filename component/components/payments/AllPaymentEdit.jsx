import ConfigCtx from "context/configEdit";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "../../../styles/Home.module.scss";
import PaymentEdit from "./PaymentEdit";

const AllPaymentEdit = ({ Config }) => {
  const [value, setValue] = useState([...Config.Payments]);

  const brouser = useCallback(
    (label) => {
      return value.filter((v) => v.label == label)[0];
    },
    [value]
  );

  const { setConfig } = useContext(ConfigCtx);

  useEffect(() => {
    console.log(Config.Payments);
    setValue([...Config.Payments]);
  }, [Config.Payments]);

  const saveEdit = useCallback(
    (save) => {
      if (save) {
        setConfig({
          ...Config,
          Payments: [...(Config.Payments = value)],
        });
      } else {
        setValue([...Config.Payments]);
      }
    },
    [value, Config]
  );

  return (
    <div className="d-flex flex-column ">
      {Config.Payments.map((i) => {
        return (
          i.value != "" && (
            <PaymentEdit
              label={i.label}
              img={i.img}
              value={i.value}
              key={i.id}
              setValor={setValue}
              valor={brouser(i.label)}
            ></PaymentEdit>
          )
        );
      })}
      {Config.Payments.map((i) => {
        return (
          i.value == "" && (
            <PaymentEdit
              label={i.label}
              img={i.img}
              value={i.value}
              key={i.id}
              setValor={setValue}
              valor={brouser(i.label)}
            ></PaymentEdit>
          )
        );
      })}
      <div className="d-flex fixed-bottom justify-content-center align-items-center ">
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
          className={styles.btn_primary+' '+styles.btn_edit + " btn"}
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AllPaymentEdit;
