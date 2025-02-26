import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import NewFile from "./NewFile";
import NewFolder from "./NewFolder";

const NavBar = (props) => {
  useEffect(() => {
    (() => {})();
  }, []);

  function HeaderButton({ loggedIn }) {
    if (!loggedIn) {
      return <Link to="/signin">Sign in</Link>;
    }
    return (
      <>
        <div onClick={userLogOut}>Logout</div>
      </>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.button}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.button}>
        <HeaderButton loggedIn={userLoggedIn()}></HeaderButton>
      </div>
      {(props.stateFile || props.stateFolder) && (
        <div>
          {props.stateFile && <NewFile close={props.newFile} />}
          {props.stateFolder && <NewFolder close={props.newFolder} />}
        </div>
      )}
    </div>
  );
};

export default NavBar;
