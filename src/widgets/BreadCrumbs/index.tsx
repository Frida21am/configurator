import styles from "./styles.module.scss";

const BreadCrumbs = () => {
  return (
    <div className={styles.breadСrumbsWrapper}>
      <a href="#" className={styles.link}>
        Beads
      </a>
      <span className={styles.slash}> / </span>
      <a href="#" className={styles.link}>
        Beads medium
      </a>
      <span className={styles.slash + " " + styles.active}> / </span>
      <a href="#" className={styles.link + " " + styles.active}>
        Configurator
      </a>
    </div>
  );
};

export default BreadCrumbs;
