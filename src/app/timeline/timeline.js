import { renderData, revealAnimationVertically } from "@/constant/constant";
import Reveal from "../reveal/reveal";
import styles from "./timeline.module.css";
const Timeline = () => {
  return (
    <>
      {renderData.map((val, idx) => {
        return (
          <div className={styles.timelineParent} key={idx}>
            <Reveal horizon={revealAnimationVertically}>
              <div className={styles.circleAndBorderParent}>
                <div className={styles.circleParent}></div>
                <div className={styles.dashedBorder}></div>
              </div>
            </Reveal>

            <div className={styles.timelineContentParent}>
              <div className={styles.title}>{val.title}</div>
              {val.subData?.map((e, index) => {
                return (
                  <div key={index}>
                    {e?.subTitle && (
                      <div className={styles.subtitle}>{e?.subTitle}</div>
                    )}

                    {e?.org && <div className={styles.subtitle}>{e?.org}</div>}

                    {e?.summary && (
                      <div className={styles.summary}>{e?.summary}</div>
                    )}
                    {e?.expertise && (
                      <ul>
                        {e?.expertise.map((lang, i) => {
                          return <li key={i} >{lang} </li>;
                        })}
                      </ul>
                    )}

                    {e?.lang && (
                      <ul>
                        {" "}
                        {e.lang.map((e, i) => {
                          return <li key={i} >{e}</li>;
                        })}
                      </ul>
                    )}
                  </div>
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
