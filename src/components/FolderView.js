import { useState, useEffect } from "react";
import styles from "../styles/FolderView.module.css";
import stylesSignIn from "../styles/SignIn.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import apiCall from "../utils/apiFunctions";
import SignIn from "./SignIn";
import SideBar from "./SideBar";
import { Link, useParams } from "react-router";

const FolderView = (props) => {
  const [files, setFiles] = useState();
  const [parentId, setParentId] = useState("");
  const folderId = useParams().folderId;

  const fetchFiles = async () => {
    // When not in root directory, get the details of parent folder
    var folderInfo = [];
    if (folderId) {
      folderInfo = await apiCall("get", "/private/file/" + folderId);
      console.log(folderInfo);
      if (folderInfo.parentId !== null) setParentId(folderInfo.parentId);
      else setParentId("");
    }

    const fileList = await apiCall("get", "/private/" + folderId);
    // List folders first
    fileList.sort((a, b) => b.isFolder - a.isFolder);
    setFiles(fileList);
  };

  useEffect(() => {
    if (userLoggedIn()) fetchFiles();
  }, [folderId, props.trigger]);

  if (!userLoggedIn())
    return (
      <div className={stylesSignIn.main}>
        <SignIn />
      </div>
    );

  if (!files) return null;

  return (
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <SideBar
          showNewFile={props.newFile}
          showNewFolder={props.newFolder}
          showDelFolder={props.delFolder}
          folderId={folderId}
        />
      </div>
      <div className={styles.content}>
        <Link to={"/" + parentId} className={styles.folder}>
          Parent Folder
        </Link>
        {files.map((file, index) => {
          if (file.isFolder)
            return (
              <Link to={"/" + file.id} key={index} className={styles.folder}>
                {file.name}
              </Link>
            );
          else
            return (
              <div
                className={styles.file}
                key={index}
                onClick={() => {
                  props.fileView(file);
                }}
              >
                {file.name}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default FolderView;
