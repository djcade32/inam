// This is the component for the Header.
import React from "react";
import styles from "./Header.module.css";
import headerImg from "../../images/header-img.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="header" className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h1 className={styles.headerTitle}>Vision For The Future</h1>
        <p className={styles.headerBody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          corrupti accusamus accusantium ullam rem ipsa vero sequi fugiat, odit
          ad.
        </p>
        <Link
          className={styles.hireUsLink}
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.headerButton}>HIRE US</button>
        </Link>
      </div>
      <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
        <div className={styles.headerImgContainer}>
          <img
            className={styles.headerImg}
            src={headerImg}
            alt="Computer with INAM logo on the screen."
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
}
