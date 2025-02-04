import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SignUp.module.css";

const SignUp = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <div className={styles.main}>
      <form>
        <div className={styles.loginform}>
          <h2>Sign up</h2>
          <div className={styles.loginfield}>
            <label for="email">Email</label>
            <input name="email" />
          </div>
          <div className={styles.loginfield}>
            <label for="password">Password</label>
            <input name="password" />
          </div>
          <div className={styles.loginfield}>
            <label for="password2">Repeat Password</label>
            <input name="password2" />
          </div>
          <button type="submit">Continue</button>
          <p>
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
