import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";
import styles from "../styles/NavBar.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import NewFile from "./NewFile";
import FileView from "./FileView";
import NewFolder from "./NewFolder";
import DelFolder from "./DelFolder";

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
    <>
      <div className={styles.main}>
        <div className={styles.button}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.button}>
          <HeaderButton loggedIn={userLoggedIn()}></HeaderButton>
        </div>
        {(props.stateFile ||
          props.stateFolder ||
          props.stateFileView ||
          props.stateDelFolder) && (
          <div>
            {props.stateFile && (
              <NewFile close={props.newFile} reload={props.reload} />
            )}
            {props.stateFolder && (
              <NewFolder close={props.newFolder} reload={props.reload} />
            )}
            {props.stateFileView && (
              <FileView
                close={props.fileView}
                file={props.file}
                reload={props.reload}
              />
            )}
            {props.stateDelFolder && (
              <DelFolder
                close={props.delFolder}
                folderId={props.folderId}
                reload={props.reload}
              />
            )}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
