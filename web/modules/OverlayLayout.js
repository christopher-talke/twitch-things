import React from "react";
import styles from "../styles/OverlayLayout.module.css";

function OverlayLayout({ children }) {
  return <div className={styles.overlayLayout}>{children}</div>;
}

export default OverlayLayout;
