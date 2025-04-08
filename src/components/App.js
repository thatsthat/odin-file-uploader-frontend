import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import FolderView from "./FolderView";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/App.module.css";

const App = () => {
  const [newFileVisible, setNewfileVisible] = useState(false);
  const [newFolderVisible, setNewFolderVisible] = useState(false);
  const [delFolderVisible, setDelFolderVisible] = useState(false);

  const [fileViewVisible, setFileViewVisible] = useState(false);
  const [file, setFile] = useState();
  const [folderId, setFolderId] = useState();

  const [trigger, setTrigger] = useState(0);

  const reRender = () => {
    setTrigger((a) => a + 1);
  };

  const showNewFile = () => setNewfileVisible(true);
  const hideNewFile = (event) => {
    setNewfileVisible(false);
    if (event) event.stopPropagation();
  };
  const showNewFolder = () => setNewFolderVisible(true);
  const hideNewFolder = () => setNewFolderVisible(false);

  const showDelFolder = (fId) => {
    setDelFolderVisible(true);
    setFolderId(fId);
  };

  const hideDelFolder = () => setDelFolderVisible(false);

  const showFileView = (file) => {
    setFileViewVisible(true);
    setFile(file);
  };
  const hideFileView = () => {
    console.log("close file view");
    setFileViewVisible(false);
  };

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                newFile={hideNewFile}
                newFolder={hideNewFolder}
                delFolder={hideDelFolder}
                fileView={hideFileView}
                stateFile={newFileVisible}
                stateFolder={newFolderVisible}
                stateFileView={fileViewVisible}
                stateDelFolder={delFolderVisible}
                reload={reRender}
                file={file}
                folderId={folderId}
              />
            }
          >
            <Route
              path=":folderId?"
              element={
                <FolderView
                  newFile={showNewFile}
                  newFolder={showNewFolder}
                  fileView={showFileView}
                  delFolder={showDelFolder}
                  trigger={trigger}
                />
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
