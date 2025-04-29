import { useBeads } from "../../hooks/useBeads";
import { Bead } from "../../shared/types/beads";
import styles from "./styles.module.scss";

interface BeadsProps {
  initialBeadsData: Bead[];
  selectedColor: string;
  mode: string;
}

const Beads = ({ initialBeadsData, selectedColor, mode }: BeadsProps) => {
  const { beadsData, handleClick } = useBeads(
    initialBeadsData,
    selectedColor,
    mode
  );

  return (
    <div className={styles.beadsContainer}>
      <div className={styles.beads}>
        {beadsData.map((bead) => (
          <img
            key={bead.id}
            src={bead.src}
            alt={`Bead ${bead.id}`}
            className={styles.circle}
            onClick={() => handleClick(bead.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Beads;
