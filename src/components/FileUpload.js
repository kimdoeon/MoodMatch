import React, { useState } from "react";
import styles from "../styles/FileUpload.module.css";

function FileUpload({ state, getState }) {
  const [file, setFile] = useState({});
  const imgUpload = (e) => {
    const imageType = e.target.files[0].type.includes("image");
    const videoType = e.target.files[0].type.includes("video");
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageType,
      video: videoType,
    });
    getState(true);
  };

  return (
    <div>
      <input className={styles.fileChoose} type="file" onChange={imgUpload} />
      {file.image && <img className={styles.image} src={file.url} />}
      {file.video && (
        <video className={styles.video} src={file.url} controls width="350px" />
      )}
    </div>
  );
}

export default FileUpload;
