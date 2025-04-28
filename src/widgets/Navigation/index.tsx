import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button + " " + styles.buttoNext}>Next</button>
    </div>
  );
};

export default Navigation;
