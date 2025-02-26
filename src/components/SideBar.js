import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SideBar.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const SideBar = (props) => {
  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.button} onClick={props.showNewFile}>
        New File
      </div>
      <div className={styles.button} onClick={props.showNewFolder}>
        New Folder
      </div>
    </div>
  );
};

export default SideBar;
