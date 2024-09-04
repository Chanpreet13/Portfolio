"use client";
import styles from "./page.module.css";
import Mask from "./maskHovering/mask/page";
import Body from "./maskHovering/body/page";
import Paragraph from "@/scrollGradient/Paragraph/page";
import Parallax from "./scrollingParallax/parallax";
import Timeline from "./timeline/timeline";
import Reveal from "./reveal/reveal";
import Random from "./random/page";
import FrameworkProgress from "./frameworkProgress/page";
import {
  basicLanguagesInfo,
  intro,
  languagesInfo,
  revealAnimationHorizontally,
  title,
} from "@/constant/constant";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main}>
        <Mask />
        <Body />
      </div>

      <div className={styles.random}>
        <Random />
      </div>
      <Paragraph para={title} width={"50%"} />
      <div className={styles.main}>
        <Parallax />
      </div>

      <div className={styles.introParent}>
        <Reveal horizon={revealAnimationHorizontally}>
          <Paragraph para={intro} bgClr={"black"} txtClr={"white"} />
        </Reveal>
      </div>

      <div className={styles.mainProgressParent}>
        <FrameworkProgress languages={languagesInfo} movement={"rightToLeft"} />
      </div>

      <div className={styles.progressParent}>
        <FrameworkProgress
          languages={basicLanguagesInfo}
          movement={"leftToRight"}
        />
      </div>
      <div className={styles.timelineMain}>
        <Timeline />
      </div>
      <div className={styles.common}>
        <Footer />
      </div>
    </main>
  );
}
