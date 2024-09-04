import styles from "./body.module.css";
const Body = () => {
  return (
    <>
      <div className={styles.main}>
        <p className={styles.content}>
          Strive not to be a <span>success</span>,
        </p>
        <p className={styles.content}> but rather to be of value.</p>
      </div>
    </>
  );
};

export default Body;
