"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./progress.module.css";
// import { Progress } from "antd";
import { motion, scroll, useScroll, useTransform } from "framer-motion";
import { languagesInfo } from "@/constant/constant";

const ProgressComponent = () => {
  const elemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elemRef,
    offset: ["start end", "end start"],
  });

  const xOrigin = useTransform(scrollYProgress, [0, 1], [500, -750]);

  return (
    <>
      <div className={styles.progressParent}>
        {languagesInfo.map((e) => {
          return (
            <>
              <motion.div
                className={styles.mainParent}
                ref={elemRef}
                style={{ x: xOrigin }}
              >
                <div className={styles.main}>
                  <span className={styles.langTitle}>{e.lang}</span>
                  {/* <Progress
                    size={180}
                    strokeColor={"black"}
                    type="circle"
                    percent={e.percent}
                  /> */}
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default ProgressComponent;
