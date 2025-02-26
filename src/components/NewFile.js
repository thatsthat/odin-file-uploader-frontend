import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewFile.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const NewFile = (props) => {
  const doNothing = (e) => e.stopPropagation();
  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.main} onClick={doNothing}>
        <div className={styles.header}>
          <div className={styles.title}>New File</div>
          <div className={styles.close} onClick={props.close}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className={styles.confirm}>
          <div className={styles.button}>Upload</div>
        </div>
      </div>
    </div>
  );
};

export default NewFile;
