import { useBeads } from "../../hooks/useBeads";
import { Bead } from "../../shared/types/beads";
import styles from "./styles.module.scss";

interface BeadsProps {
  initialBeadsData: Bead[];
  mode: string;
  selectedColorSrc: string;
  selectedColorName: string;
}

const Beads = ({
  initialBeadsData,
  mode,
  selectedColorSrc,
  selectedColorName,
}: BeadsProps) => {
  const { beadsData, handleClick } = useBeads(
    initialBeadsData,
    selectedColorSrc,
    mode
  );

  return (
    <div className={styles.beadsContainer}>
      {selectedColorName && (
        <div className={styles.colorLabel}>{selectedColorName}</div>
      )}
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
