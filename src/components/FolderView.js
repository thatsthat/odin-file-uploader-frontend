import { useState, useEffect } from "react";
import styles from "../styles/FolderView.module.css";
import stylesSignIn from "../styles/SignIn.module.css";
import { userLoggedIn, userLogOut } from "../utils/userInfo";
import apiCall from "../utils/apiFunctions";
import SignIn from "./SignIn";
import SideBar from "./SideBar";
import { Link, useParams } from "react-router";
import Icon from "@mdi/react";
import { mdiFile, mdiFolderOutline, mdiFolderArrowUpOutline } from "@mdi/js";

const FolderView = (props) => {
  const [files, setFiles] = useState();
  const [parentId, setParentId] = useState("");
  const [folderName, setFolderName] = useState(false);
  const folderId = useParams().folderId;

  const fetchFiles = async () => {
    // When not in root directory, get the details of parent folder
    var folderInfo = [];
    if (folderId) {
      folderInfo = await apiCall("get", "/private/file/" + folderId);
      setFolderName(folderInfo.name);
      if (folderInfo.parentId !== null) {
        setParentId(folderInfo.parentId);
      } else setParentId("");
    } else setFolderName(false);

    const fileList = await apiCall("get", "/private/" + folderId);
    // List folders first
    fileList.sort((a, b) => b.isFolder - a.isFolder);
    setFiles(fileList);
    console.log(folderName);
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
        {folderName && (
          <>
            <div className={styles.folderName}>Folder Name: {folderName}</div>
            <Link to={"/" + parentId} className={styles.folder}>
              <Icon
                className={styles.icon}
                path={mdiFolderArrowUpOutline}
                size={1}
              />
              Parent Folder
            </Link>
          </>
        )}
        {files.map((file, index) => {
          if (file.isFolder)
            return (
              <Link to={"/" + file.id} key={index} className={styles.folder}>
                <Icon
                  className={styles.icon}
                  path={mdiFolderOutline}
                  size={1}
                />
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
                <Icon className={styles.icon} path={mdiFile} size={1} />
                {file.name}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default FolderView;
