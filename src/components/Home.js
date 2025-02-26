import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import stylesSignIn from "../styles/SignIn.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import SignIn from "./SignIn";
import SideBar from "./SideBar";

const Home = (props) => {
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
