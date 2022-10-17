import React from "react";
import styles from "../../../styles/Home.module.scss";

function SocialMedia(props) {
  let icon = " bx bxl-" + props.type;
  if (props.type == "link") {
    icon = " bx bx-" + props.type;
  }

  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <i className={styles.social_icon + icon}></i>
    </a>
  );
}

export default SocialMedia;
