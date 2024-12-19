import React, { useState, useEffect } from "react";
import styles from "../styles/ProductInCart.module.css";

const ProductInCart = (props) => {
  /* const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount((a) => a + 1);
  }; */

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.product}>
      <img
        className={styles.photo}
        alt={props.name}
        src={`${process.env.PUBLIC_URL}/images/${props.name}.svg`}
      />
      <div className={styles.description}>
        <div>
          <b>{props.name}</b>
        </div>
        <div>{`${props.price * props.quantity}€`}</div>
        <div className={styles.quantityControls}>
          <div
            id={styles["buttonDec"]}
            className={styles.quantityButton}
            onClick={() => props.lessClick(props.id)}
          >
            -
          </div>
          <div className={styles.quantity}>{props.quantity}</div>
          <div
            id={styles["buttonInc"]}
            className={styles.quantityButton}
            onClick={() => props.moreClick(props.id)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
