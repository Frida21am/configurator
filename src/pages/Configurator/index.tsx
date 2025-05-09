import BeadsConfigurator from "../../widgets/BeadsConfigurator";
import BreadCrumbs from "../../widgets/BreadCrumbs";
import styles from "./styles.module.scss";

const Configurator = () => {
  return (
    <section className={styles.configurator}>
      <div className="container">
        <BreadCrumbs />
        <BeadsConfigurator />
      </div>
    </section>
  );
};

export default Configurator;
