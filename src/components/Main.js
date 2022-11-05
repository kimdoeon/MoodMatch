import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
function Main() {
  return (
    <div>
      <header className={styles.main_Header}>
        <Link to="/">
          <img src="./img/logo.jpg" alt="logo" />
        </Link>
      </header>
      <section className={styles.main_content}>
        <div className={styles.wrapper}>
          <img className={styles.img} src="./img/main.jpg" alt="main image" />
        </div>

        <div className={styles.description}>
          매번 비슷한 추천 곡에 싫증을 느끼진 않으셨나요?
          <br />
          지금 당신이 느끼는 감정을 손그림, 사진, 영상으로 표현해보세요.
          <br />
          MOOD MATCH는 여러분의 평소 취향과 관계없이 지금, 이 순간 당신의
          분위기와 어울리는 음악을 추천해 드립니다.
        </div>
      </section>
      <div className={styles.main_service}>
        <div className={styles.container}>
          <div className={styles.title}>어울리는 음악 추천 받기</div>
          <div className={styles.upload}>
            <Link to="/draw" className={styles.drawing}>
              <i className="fa-solid fa-pencil fa-4x"></i>
              <div>손그림 업로드</div>
            </Link>
            <Link to="/picAndVid" className={styles.pictureAndVideo}>
              <i className="fa-regular fa-image fa-4x"></i>
              <div>사진/영상 업로드</div>
            </Link>
          </div>
        </div>
      </div>
      <section className={styles.howTo}>
        <div className={styles.container}>
          <div className={styles.howTo_content}>
            <div className={styles.howTo_title}>HOW TO</div>
            <div className={styles.howTo_description}>
              1. 원하는 모드를 선택합니다.
              <br />
              2. 추천받고 싶은 노래의 시간을 선택합니다.
              <br />
              3. 사용자가 업로드한 파일을 AI가 분석하여 어울리는 분위기의 음악을
              추천해드립니다.
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2022
          <br />
          kangdb123-@naver.com &nbsp; ilsin205@naver.com
        </p>
      </footer>
    </div>
  );
}

export default Main;
