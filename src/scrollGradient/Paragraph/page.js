"use client";
import { useRef } from "react";
import styles from "./para.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
const Paragraph = ({ para, bgClr, txtClr, width }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const renderParagraph = para.split(" ");
  return (
    <>
      <div
        className={styles.parent}
        style={{
          backgroundColor: bgClr ? bgClr : " ",
          backgroundImage: bgClr && "none",
        }}
      >
        <div className={styles.wordParent} style={{ width }} ref={element}>
          {renderParagraph.map((e, i) => {
            const start = i / renderParagraph.length;
            const end = start + 1 / renderParagraph.length;

            return (
              <div key={i}>
              <WordComponent
                index={i}
                value={e}
                range={[start, end]}
                progress={scrollYProgress}
                txtClr={txtClr}
              />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const WordComponent = ({ value, index, range, progress, txtClr }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <div key={index} >
      <span
        className={styles.words}
        style={{ color: txtClr ? txtClr : "black" }}
      >
        <span
          className={styles.shadow}
          style={{ color: txtClr ? txtClr : "black" }}
        >
          {value}
        </span>

        <motion.span style={{ opacity: opacity }}>{value}</motion.span>
      </span>
    </div>
  );
};
export default Paragraph;
