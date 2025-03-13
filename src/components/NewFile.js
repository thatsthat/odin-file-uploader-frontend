import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewFile.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const NewFile = (props) => {
  const doNothing = (e) => e.stopPropagation();
  const upload = async (formData) => {
    const url = import.meta.env.VITE_API_URL + "/private";
    const token = localStorage.getItem("currentToken");
    const resp = await fetch(url, {
      method: "post",
      // prettier-ignore
      headers: {
        "Authorization": "Bearer " + token,
      },
      body: formData,
    });
    const respPayload = await resp.json();
    console.log(respPayload);
  };
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
          <form
            id="fileForm"
            action={upload}
            method="post"
            encType="multipart/form-data"
          >
            <input type="file" id="avatar" name="avatar" />
            <div className={styles.confirm}>
              <div className={styles.button}>
                <button type="submit">Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFile;
