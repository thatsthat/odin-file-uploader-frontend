import React, { useState, useEffect } from "react";
import { Link } from "react-router";
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
      <div
        className={styles.button}
        onClick={() => {
          props.showDelFolder(props.folderId);
        }}
      >
        Delete Folder
      </div>
    </div>
  );
};

export default SideBar;
