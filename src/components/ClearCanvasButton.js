import React from "react";
import { useCanvas } from "./CanvasContext";
import styles from "../styles/Draw.module.css";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button onClick={clearCanvas} className={styles.clearDrawing}>
      리셋
    </button>
  );
};
