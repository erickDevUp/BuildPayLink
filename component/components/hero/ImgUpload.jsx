
import ConfigCtx from "context/configEdit";
import { useCallback, useContext, useEffect, useRef, useState } from "react";


import styles from "../../../styles/Home.module.scss";

const ImgUpload = ({ props ,valor,setValue, setForm}) => {
  const photo = useRef();
  const selectPhoton = useRef();

  const { Config, setConfig } = useContext(ConfigCtx);

  /*------------setImg---------*/

  const preLoadImg = (select, img) => {
 
      
    const renderImg = new FileReader();
      renderImg.readAsDataURL(select.files[0]);

      const formData = new FormData();
      formData.append("file", select.files[0]);
      setForm(formData)
  
  
      renderImg.onload = async (e) => {
        img.src = e.target.result
        
        setValue({...valor,img:img.src})
      };

    //***********************drag and drop******************************* */
  };

  const dropImg = (selector, e, img) => {
    img.style.opacity = "1";
    e.preventDefault();
    const select = e.dataTransfer;
    selector.files = select.files;
    preLoadImg(select, img);
  };

  //---------------------------------------------------------------------------------------

  return (
    <form className={styles.imgUpload}>
      <input
        id="file-upload"
        name="file"
        className={styles.UploadInput}
        ref={selectPhoton}
        type="file"
        onChange={(e) => preLoadImg(selectPhoton.current, photo.current)}
      />
      <img
        src={props.src}
        alt={props.alt}
        className={styles.hero_image + " " + styles.UploadPhoto}
        ref={photo}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dropImg(selectPhoton.current, e, photo.current)}
        onDragLeave={(e) => (e.target.style.opacity = "1")}
        onDragEnter={(e) => (e.target.style.opacity = "0.5")}
      />
    </form>
  );
};

export default ImgUpload;
