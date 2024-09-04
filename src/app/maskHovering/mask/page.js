"use client";
import { useEffect, useState } from "react";
import styles from "./mask.module.css";
import { motion } from "framer-motion";
import useMouseMover from "@/utils/useMouseMover";

const Mask = () => {
  const { x, y } = useMouseMover();

  const [checkMouseEnter, setCheckMouseEnter] = useState(false);
  const size = checkMouseEnter ? 200 : 40;
  return (
    <>
      <motion.div
        animate={{
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
        className={styles.main}
      >
        <div
          onMouseEnter={() => setCheckMouseEnter(true)}
          onMouseLeave={() => setCheckMouseEnter(false)}
        >
          <p className={styles.content}>
            Success is not final, failure is not fatal
          </p>
          <p className={styles.content}>
            It is the courage to continue that counts
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Mask;
