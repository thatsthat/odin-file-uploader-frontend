import { useState, useEffect } from "react";
import styles from "../styles/FileView.module.css";
import apiCall from "../utils/apiFunctions";

const FileView = (props) => {
  const doNothing = (e) => e.stopPropagation();
  const fileDelete = async () => {
    const resp = await apiCall("delete", "/private/" + props.file.id);
    console.log(resp);
    props.close();
    props.reload();
  };

  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.main} onClick={doNothing}>
        <div className={styles.header}>
          <div className={styles.title}>File Information</div>
          <div className={styles.close} onClick={props.close}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <div>Name: {props.file.name}</div>
          <div>
            Created:{" "}
            {new Date(props.file.created).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>{" "}
          <div className={styles.buttonsRow}>
            <div className={styles.button}>Download</div>
            <div className={styles.button} onClick={fileDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileView;
