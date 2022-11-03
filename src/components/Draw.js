import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/Draw.module.css";
// import {useState,useEffect} from "react";
function Draw() {
  return (
   <div>
    <header className={styles.draw_Header}>
              <Link to="/">
                <img src ="./img/logo_kids.png" alt="logo"/>
              </Link>
            </header>
     <section className={styles.main}>
        <div className={styles.container}>
            <div className={styles.title}>
                내 그림과 어울리는 음악 추천 받기
            </div>
            
            <div className={styles.btn_drawing}>
                <i className="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-eraser"></i>
            </div>
            <div className={styles.upload_drawing}>
                마음껏 그림을 그려보세요
            </div>

   

            <Link to="/recommend">
                <button>완성</button>
            </Link>

            <div className={styles.tip}>
                TIP! 내가 표현하고 싶은 것을 단어와 함께 표현해보세요~
            </div> 
        </div>
    </section>
   </div>
  );
}

export default Draw;