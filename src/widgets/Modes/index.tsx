import { useState } from "react";
import styles from "./styles.module.scss";

interface ModesProps {
  setMode: (mode: string) => void;
}

const buttons = [
  { id: "monochrome", label: "Монохром" },
  { id: "individual", label: "Индивидуальный" },
  { id: "two-colors", label: "2 цвета" },
  { id: "one-bead", label: "С 1 бусиной" },
];

const Modes = ({ setMode }: ModesProps) => {
  const [activeButton, setActiveButton] = useState<string>("monochrome");

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
    setMode(id);
  };

  return (
    <div className={styles.modesContainer}>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={`${styles.button} ${
            activeButton === button.id ? styles.buttonActive : ""
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Modes;
