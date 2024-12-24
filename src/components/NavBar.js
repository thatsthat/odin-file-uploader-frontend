import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";

const NavBar = (props) => {
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    (() => {})();
  }, []);

  const mystyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "3rem",
  };

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <div>
      <div>
        <div className={styles.navBar}>
          <div className={styles.button}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.button}>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
