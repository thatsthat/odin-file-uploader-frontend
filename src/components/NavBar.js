import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import { userLoggedIn, userLogOut } from "./utils/userInfo";

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
        <button type="button" onClick={userLogOut}>
          Logout
        </button>
      </>
    );
  }

  return (
    <div>
      <div>
        <div className={styles.navBar}>
          <div className={styles.button}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.button}>
            <HeaderButton loggedIn={userLoggedIn()}></HeaderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
