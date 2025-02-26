import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewFolder.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const NewFolder = (props) => {
  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>New Folder</div>
          <div className={styles.close} onClick={props.close}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <input type="text" />
        </div>
        <div className={styles.confirm}>
          <div className={styles.button}>Confirm</div>
        </div>
      </div>
    </div>
  );
};

export default NewFolder;
