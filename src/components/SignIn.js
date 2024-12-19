import React, { useState, useEffect } from "react";
import styles from "../styles/SignIn.module.css";

const SignIn = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <div className={styles.main}>
      <form>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SignIn;
