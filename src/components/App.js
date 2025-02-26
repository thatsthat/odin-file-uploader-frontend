import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/App.module.css";

const App = () => {
  useEffect(() => {
    (() => {})();
  }, []);

  const [newFileVisible, setNewfileVisible] = useState(false);
  const [newFolderVisible, setNewFolderVisible] = useState(false);

  const showNewFile = () => setNewfileVisible(true);
  const hideNewFile = (event) => {
    setNewfileVisible(false);
    event.stopPropagation();
  };
  const showNewFolder = () => setNewFolderVisible(true);
  const hideNewFolder = () => setNewFolderVisible(false);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <NavBar
          newFile={hideNewFile}
          newFolder={hideNewFolder}
          stateFile={newFileVisible}
          stateFolder={newFolderVisible}
        />
        <Routes>
          <Route
            path="/"
            element={<Home newFile={showNewFile} newFolder={showNewFolder} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
