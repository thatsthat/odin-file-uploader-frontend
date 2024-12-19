import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductInCart from "./ProductInCart";
import styles from "../styles/ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.shade} onClick={props.closeCart}></div>
      <div className={styles.cart}>
        <div className={styles.header}>Your Shopping Cart</div>
        <div className={styles.products}>
          {Array(...Array(6)).map((v, i) =>
            props.quantities[i] ? (
              <ProductInCart
                key={i}
                id={i}
                name={props.fruitNames[i]}
                moreClick={props.moreClick}
                lessClick={props.lessClick}
                quantity={props.quantities[i]}
                price={props.fruitPrices[i]}
              />
            ) : null
          )}
        </div>
        <div className={styles.totalPrice}>
          Total:
          {props.quantities.reduce(
            (a, b, i) => a + props.fruitPrices[i] * b,
            0
          )}
          €
        </div>
        <div className={styles.button} onClick={console.log("checked out")}>
          Checkout
        </div>
        <div className={styles.button} onClick={props.closeCart}>
          Close
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
