import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";
import styles from "../styles/PicAndVid.module.css";
// import {useState,useEffect} from "react";
function PicAndVid() {
  // 파일 업로드를 위한 코드
  const[state,setState] = useState(false);
  const getState = (state)=>{
    setState((curr)=>{
      curr=state;});
  }

  // Test code
  // const[x,setX] = useState(0);
  // const test = (x)=>{
  //   console.log(x);
  // }
  console.log("parent state: ",state);
  return (
    <div>
      <header className={styles.picAndVid_Header}>
        <Link to="/">
          <img className={styles.picAndVid_logo} src="./img/logo.jpg" />
        </Link>
      </header>

      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            내 사진/영상과 어울리는 음악 추천 받기
          </div>
{/* 
          <div className={styles.upload_file}>
            <span>사진/영상을 업로드 해주세요</span>
            <FileUpload test={test}/>
          </div> */}
          {state ? 
            <FileUpload state={state} getState={getState}/>:
              <div className={styles.upload_file}>
                <span>사진/영상을 업로드 해주세요</span>
                <FileUpload state={state} getState={getState}/>
              </div> 
          }
          
          <div className={styles.option}>
            <div className={styles.count}>
              <span>원하는 노래 곡 수(1~5곡)</span>
              <button></button>
            </div>
            <div className={styles.time}>
              <span>원하는 노래 재생 시간(30분 단위)</span>
              <button></button>
            </div>
          </div>

          <Link to="/recommend">
            <button className={styles.submit}>완성</button>
          </Link>

          <div className={styles.tip}>
            TIP! 정방향 사진일수록 화면이 예쁜 썸네일이 만들어져요~
          </div>
        </div>
      </section>
    </div>
  );
}

export default PicAndVid;
