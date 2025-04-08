import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styles from "../styles/NewFile.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";

const NewFolder = (props) => {
  const doNothing = (e) => e.stopPropagation();
  const [errors, setErrors] = useState({});
  const currentURL = useLocation();
  const parentId = currentURL.pathname.slice(1);
  console.log(parentId);
  const upload = async (event) => {
    event.preventDefault();
    let validationErrors = {};
    const formData = new FormData(event.currentTarget);
    formData.append("parentId", parentId);
    const url = import.meta.env.VITE_API_URL + "/private/folder";
    const token = localStorage.getItem("currentToken");
    console.log(formData.get("name"));
    const resp = await fetch(url, {
      method: "post",
      // prettier-ignore
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        parentId: formData.get("parentId"),
      }),
    });
    const respPayload = await resp;
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle the successful form submission, e.g., sending formData to a server
      setErrors({}); // Clear any previous errors
      props.reload();
      props.close();
    }
  };
  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.main} onClick={doNothing}>
        <div className={styles.header}>
          <div className={styles.title}>New Folder</div>
          <div className={styles.close} onClick={props.close}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <form id="fileForm" onSubmit={upload} encType="multipart/form-data">
            <input type="text" id="name" name="name" />
            <button type="submit" className={styles.button}>
              Upload
            </button>
            {errors.file && <div className={styles.error}>{errors.file}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFolder;
