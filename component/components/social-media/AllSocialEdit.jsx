import ConfigCtx from "context/configEdit";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import SocialEdit from "./SocialEdit";
import styles from "../../../styles/Home.module.scss";

const AllSocialEdit = ({ Config }) => {

    const [value,setValue] = useState([...Config.Social])

    const brouser = useCallback((type) => {
        return value.filter((v) => v.type == type)[0]
      }, [value]);

      const { setConfig } = useContext(ConfigCtx); 

      useEffect(() => {
        console.log(Config.Social);
        setValue([...Config.Social]);
        
      }, [Config.Social]);
    
      const saveEdit = useCallback(
        (save) => {
          if (save) {
            setConfig({
              ...Config,
              Social:[ 
                ...Config.Social=value
              ],
            });
          } else {
            setValue([...Config.Social]);
          }
        },
        [value, Config]
      );

  return (
    <div className="d-flex flex-column ">
      {Config.Social.map(
          (i) =>{
          return i.link != "" && (
            <SocialEdit
              label={i.label}
              type={i.type}
              href={i.link}
              key={i.label}
              setValor={setValue}
              valor={brouser(i.type)}
            ></SocialEdit>
          )}
      )}
      {Config.Social.map(
        (i) =>{
          return i.link == "" && (
            <SocialEdit
              label={i.label}
              type={i.type}
              href={i.link}
              key={i.label}              
              setValor={setValue}
              valor={brouser(i.type)}
            ></SocialEdit>
          )}
      )}
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
  )
};

export default AllSocialEdit;
