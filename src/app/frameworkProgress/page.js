"use client";
import { useRef } from "react";
import styles from "./style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircularProgress } from "@mui/material";

const FrameworkProgress = ({ languages, movement }) => {

  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end end"],
  });

  const rightToLeftHorizon = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const leftToRightHorizon = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <>
      <div className={styles.progressParent}>
        <motion.div
          ref={elementRef}
          className={styles.parent}
          style={{
            x:
              movement === "rightToLeft"
                ? rightToLeftHorizon
                : leftToRightHorizon,
          }}
        >
          {languages?.map((e, idx) => {
            return (
              <div className={styles.main} key={idx}>
                <span className={styles.langTitle}>{e.lang}</span>
             
                <div style={{ position: "relative" }}>
                  <CircularProgress
                    variant="determinate"
                    value={e.percent}
                    sx={{ color: "white" }}
                    size={180}
                    title="Helo"
                  />
                  <span
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "35%",
                      right: 0,
                      left: "30%",
                      down: 0,
                      fontSize: 35,
                    }}
                  >
                    {`${e.percent} %`}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default FrameworkProgress;
