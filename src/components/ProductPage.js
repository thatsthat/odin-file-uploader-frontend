import React, { useState, useEffect } from "react";
import ProductInPage from "./ProductInPage";
import styles from "../styles/ProductPage.module.css";

const ProductPage = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <div>
      <div className={styles.productgrid}>
        {Array(...Array(6)).map((v, i) => (
          <ProductInPage
            key={i}
            id={i}
            name={props.fruitNames[i]}
            clickButton={props.clickButton}
            price={props.fruitPrices[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
