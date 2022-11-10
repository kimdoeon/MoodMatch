import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Recommend.module.css";
function Recommend() {
  return (
    <div>
      <header className={styles.recommend_Header}>
        <Link to="/">
          <img className={styles.recommend_logo} src="./img/logo.jpg" />
        </Link>
      </header>

      <section className={styles.main_content1}>
        <div className={styles.container}>
          <img src="img/file_img.png" />
          <div className={styles.tag}>
            <div className={styles.tag_description}>#여름</div>
            <div className={styles.tag_description}>#한강공원</div>
            <div className={styles.tag_description}>#평온한</div>
            <div className={styles.tag_description}>#여유로운</div>
          </div>
        </div>
      </section>

      <section className={styles.main_content2}>
        <div className={styles.container}>
          <div className={styles.song_button}>
            <button type="button" className={styles.song_button}>
              <img src="img/rewind.png" className={styles.button_img} />
            </button>
            <button type="button" className={styles.song_button}>
              <img src="img/play.png" className={styles.button_img} />
            </button>
            <button type="button" className={styles.song_button}>
              <img src="img/forward.png" className={styles.button_img} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.main_content3}>
        <div className={styles.container}>
          <div className={styles.song}>
            <img src="img/file_img.png" />
            <div className={styles.playlist_description1}>
              <div className={styles.playlist_artist}>백예린</div>
              <div className={styles.playlist_title}>Sqaure</div>
            </div>
            <div className={styles.playlist_description1}>
              <div className={styles.playlist_tag}>#몽환적인</div>
              <div className={styles.playlist_tag}>#페스티벌</div>
              <div className={styles.playlist_tag}>#여유로운</div>
              <div className={styles.playlist_tag}>#한강공원</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Recommend;
