import { useRef } from "react";
import styles from "./parallax.module.css";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "@/utils/useDimension";
import nextIcon from "../../../public/next.svg";
import reactIcon from "../../../public/react_logo.png";
import jsIcon from "../../../public/javascript_logo.webp";
import nodeIcon from "../../../public/node_logo.webp";
import htmlIcon from "../../../public/html_logo.webp";
import cssIcon from "../../../public/css_logo.webp";
import Image from "next/image";
const Parallax = () => {
  const renderDiv = [
    { icon: reactIcon, number: 1 },
    { icon: nodeIcon, number: 2 },
    { icon: nextIcon, number: 3 },
    { icon: htmlIcon, number: 4 },
    { icon: cssIcon, number: 5 },
    { icon: nextIcon, number: 6 },
    { icon: reactIcon, number: 7 },
    { icon: htmlIcon, number: 8 },
    { icon: nextIcon, number: 9 },
    { icon: jsIcon, number: 10 },
  ];

  const elementRef = useRef(null);
  const { height } = useDimension();

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.75]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.23]);

  return (
    <div className={styles.main}>
      <div ref={elementRef} className={styles.gallery}>
        <Column divs={[renderDiv[0], renderDiv[1], renderDiv[2]]} y={y} />
        <Column divs={[renderDiv[4], renderDiv[5], renderDiv[6]]} y={y2} />
        <Column divs={[renderDiv[7], renderDiv[8], renderDiv[9]]} y={y3} />
        {/* <Column divs={[renderDiv[0], renderDiv[0], renderDiv[0]]} y={y4} /> */}
      </div>
    </div>
  );
};

const Column = ({ divs, y }) => {
  return (
    <motion.div style={{ y }} className={styles.parent}>
      {divs.map((e, idx) => {
        return (
          <div key={idx} className={styles.columnParent}>
            <Image src={e?.icon} height={150} width={150} />
          </div>
        );
      })}
    </motion.div>
  );
};
export default Parallax;
