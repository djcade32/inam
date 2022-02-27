// This is the component for the About Us section.

import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsSection}>
      <h1 className={styles.aboutUsHeader}>About Us</h1>
      <h2 className={styles.aboutUsSubtitle}>A Team of Industry Experts</h2>
      <p className={styles.aboutUsParagraph}>
        INAM Technology LLC is a Minority Owned IT firm, providing an exclusive
        range of IT services to the valued customers. INAM is a team of
        dedicated and experienced professionals, having multiple expertise and
        certifications in the domain of Information Technology. With customized
        services and customer centric approach, we always strive to exceed the
        customer expectations and build long-term realations with them. Our
        services include, but not limited to Help Desk, Cyber Security, System
        Administrators, and Project Management.
      </p>
      <button className={styles.aboutUsbutton}>LEARN MORE</button>
    </div>
  );
}
