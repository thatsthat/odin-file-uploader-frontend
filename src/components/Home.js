import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import stylesSignIn from "../styles/SignIn.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import SignIn from "./SignIn";
import SideBar from "./SideBar";

#test

const Home = (props) => {
  const [files, setFiles] = React.useState();

  const fetchFiles = async () => {
    const url = import.meta.env.VITE_API_URL + "/private/";
    const token = localStorage.getItem("currentToken");
    const resp = await fetch(url, {
      method: "get",
      // prettier-ignore
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    });
    const fileList = await resp.json();
    /*     const fileData = fileList.map((art) => ({
      body: art.markDownText,
      comments: art.comments,
      id: art._id,
    })); */
    setFiles(fileList);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  if (!userLoggedIn())
    return (
      <div className={stylesSignIn.main}>
        <SignIn />
      </div>
    );

  if (!files) return null;

  return (
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <SideBar showNewFile={props.newFile} showNewFolder={props.newFolder} />
      </div>
      <div className={styles.content}>
        {files.map((file, index) => (
          <div className={styles.file} key={index}>
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
