"use client";

import React from "react";
import { animateScroll } from "react-scroll";
import styles from "./styles.module.css";

const Buttons = () => {
  const OFFSET = 344;

  const scrollToOffset = (offset) => {
    animateScroll.scrollMore(offset, {
      horizontal: true,
      smooth: true,
      duration: 300,
      containerId: "items",
    });
  };

  return (
    <div className={styles.promoScrollButtons}>
      <button
        className={`${styles.promoScrollButton} ${styles.buttonLeft}`}
        onClick={() => scrollToOffset(-OFFSET)}
      >
        {/* <img src={left} alt="Arrow pointing left" /> */}
      </button>

      <button
        className={`${styles.promoScrollButton} ${styles.buttonRight}`}
        onClick={() => scrollToOffset(OFFSET)}
      >
        {/* <img src={right} alt="Arrow pointing right" /> */}
      </button>
    </div>
  );
};

export default Buttons;
