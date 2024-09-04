import { renderData, revealAnimationVertically } from "@/constant/constant";
import Reveal from "../reveal/reveal";
import styles from "./timeline.module.css";
const Timeline = () => {
  return (
    <>
      {renderData.map((val, idx) => {
        return (
          <div className={styles.timelineParent}>
            <Reveal horizon={revealAnimationVertically}>
              <div className={styles.circleAndBorderParent}>
                <div className={styles.circleParent}></div>
                <div className={styles.dashedBorder}></div>
              </div>
            </Reveal>

            <div className={styles.timelineContentParent}>
              <div className={styles.title}>{val.title}</div>
              {val.subData?.map((e, index) => {
                console.log(e?.expertise);
                return (
                  <>
                    {e?.subTitle && (
                      <div className={styles.subtitle}>{e?.subTitle}</div>
                    )}

                    {e?.org && <div className={styles.subtitle}>{e?.org}</div>}

                    {e?.summary && (
                      <div className={styles.summary}>{e?.summary}</div>
                    )}
                    {e?.expertise && (
                      <ul>
                        {e?.expertise.map((lang) => {
                          return <li>{lang} </li>;
                        })}
                      </ul>
                    )}

                    {e?.lang && (
                      <ul>
                        {" "}
                        {e.lang.map((e) => {
                          return <li>{e}</li>;
                        })}
                      </ul>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
      <div></div>
    </>
  );
};

export default Timeline;
