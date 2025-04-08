import { useState, useEffect } from "react";
import styles from "../styles/DelFolder.module.css";
import apiCall from "../utils/apiFunctions";
import { useNavigate } from "react-router";

const DelFolder = (props) => {
  const doNothing = (e) => e.stopPropagation();
  var navigate = useNavigate();
  const folderDelete = async () => {
    const folder = await apiCall("delete", "/private/" + props.folderId);
    let url = "/";
    if (folder.parentId) url += folder.parentId;
    navigate(url);
    props.close();
  };

  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.main} onClick={doNothing}>
        <div className={styles.header}>
          <div className={styles.title}></div>
          <div className={styles.close} onClick={props.close}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <div>The folder and its contets will be deleted</div>
          <div className={styles.buttonsRow}>
            <div className={styles.button} onClick={folderDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelFolder;
