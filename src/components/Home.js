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
    const resp = await fetch(url, {
      method: "get",
    });
    const fileList = await resp.json();
    const fileData = fileList.map((art) => ({
      body: art.markDownText,
      comments: art.comments,
      id: art._id,
    }));
    setFiles(fileData);
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

  return (
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <SideBar showNewFile={props.newFile} showNewFolder={props.newFolder} />
      </div>
      <div className={styles.content}>
        <p>iep</p>
      </div>
    </div>
  );
};

export default Home;
