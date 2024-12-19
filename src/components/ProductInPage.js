import React, { useState, useEffect } from "react";
import styles from "../styles/ProductInPage.module.css";

const ProductInPage = (props) => {
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
        <div>{`${props.price}€`}</div>
        <div
          className={styles.shopButton}
          onClick={() => props.clickButton(props.id)}
        >
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ProductInPage;
