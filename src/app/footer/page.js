import {
  footerContent,
  footerIcon,
  revealAnimationVertically,
} from "@/constant/constant";
import styles from "./style.module.css";
import Reveal from "../reveal/reveal";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.revealParent}>
          <Reveal horizon={revealAnimationVertically}>
            <div className={styles.iconContentParent}>
              {footerIcon.map((val) => {
                return (
                  <>
                    <Link href={val.link} className={styles.footerContent}>
                      {val.icon}
                    </Link>
                  </>
                );
              })}
            </div>
          </Reveal>
        </div>
        <div className={styles.contentParent}>
          <Reveal horizon={revealAnimationVertically}>
            {footerContent.map((val) => {
              return (
                <>
                  <div className={styles.footerContent}>{val.name}</div>
                  <div className={styles.footerContent}>{val.address}</div>
                  <div className={styles.footerContent}>{val.number}</div>
                </>
              );
            })}
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Footer;
