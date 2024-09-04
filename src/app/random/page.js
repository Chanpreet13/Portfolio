"use client";
import { useEffect, useRef } from "react";
import styles from "./random.module.css";
import { motion, useScroll } from "framer-motion";
const Random = () => {
  const targetContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetContainer,
    offset: ["start end", "end end"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("scroll", (e) => console.log(e));
  // }, []);

  return (
    <>
      <motion.div
        ref={targetContainer}
        className={styles.parent}
        style={{ opacity: scrollYProgress }}
      >
        <div className={styles.leftCircle}></div>
        <div className={styles.rightCircle}></div>
        <div className={styles.topCircle}></div>
        <div className={styles.bottomCircle}></div>

        <div className={styles.contentParent}>
          <span>Eat</span>
          <span>Code</span>
          <span>Repeat</span>
        </div>
      </motion.div>
    </>
  );
};
export default Random;
