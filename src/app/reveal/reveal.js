import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Reveal = ({ children, width = "fit-content", horizon }) => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={horizon}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
