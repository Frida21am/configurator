import { useBeads } from "../../hooks/useBeads";
import styles from "./styles.module.scss";

interface Bead {
  id: number;
  src: string;
}
interface Color {
  id: number;
  src: string;
}

interface BeadsProps {
  selectedColor: string;
  mode: string;
  colors: Color[];
}

/* Изначальный массив из 25 бусин */
const initialBeadsData: Bead[] = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  src: "/colorsOfBeads/03.png",
}));

const Beads = ({ selectedColor, mode }: BeadsProps) => {
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
