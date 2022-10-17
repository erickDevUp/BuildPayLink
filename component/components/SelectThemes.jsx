
import ConfigCtx from "context/configEdit";
import { useContext } from "react";
import styles from "../../styles/Home.module.scss";
const SelectThemes = () => {
    
  const { Config, setConfig } = useContext(ConfigCtx);
    
  const changeTheme=(e)=>{
    setConfig({
      ...Config,
      theme: e.target.name
    })
  }

  return (
    <div className="d-flex">
      <img
        src='./images/daniel-castillo.png '
        className={styles.hero_image}
        name="minimalist_dark_theme"
        onClick={(e) => changeTheme(e)}
      />
      <img
        src='./images/daniel-castillo.png '
        className={styles.hero_image}
        name="minimalist_theme"
        onClick={(e) => changeTheme(e)}
      />
      <img
        src='./images/daniel-castillo.png '
        className={styles.hero_image}
        name="swordfest_dark_theme"
        onClick={(e) => changeTheme(e)}
      />
      <img
        src='./images/daniel-castillo.png '
        className={styles.hero_image}
        name="swordfest_theme"
        onClick={(e) => changeTheme(e)}
      />
    </div>
  );
};

export default SelectThemes;
