import { useState, useEffect } from "react";
import { Bead } from "../shared/types/beads";

export const useBeads = (
  initialData: Bead[],
  selectedColor: string,
  mode: string
) => {
  const [beadsData, setBeadsData] = useState(initialData);

  // Режим Монохром
  useEffect(() => {
    if (mode === "monochrome" && selectedColor) {
      setBeadsData((prev) =>
        prev.map((bead) => ({ ...bead, src: selectedColor }))
      );
    }
  }, [selectedColor, mode]);

  // Функция при нажатии на цвет из слайдера
  const handleClick = (id: number) => {
    if (selectedColor && selectedColor !== "/colorsOfBeads/00.png") {
      switch (mode) {
        // Режим Индивидуальный
        case "individual":
          setBeadsData((prev) =>
            prev.map((bead) =>
              bead.id === id ? { ...bead, src: selectedColor } : bead
            )
          );
          break;
        // Режим 2 цвета
        case "two-colors":
          if (id <= 12) {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id <= 12 ? { ...bead, src: selectedColor } : bead
              )
            );
          } else {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id > 12 ? { ...bead, src: selectedColor } : bead
              )
            );
          }
          break;
        // Режим С 1 бусиной
        case "one-bead":
          if (id === 17) {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id === 17 ? { ...bead, src: selectedColor } : bead
              )
            );
          } else {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id === 17 ? bead : { ...bead, src: selectedColor }
              )
            );
          }
          break;
        default:
          break;
      }
    }
  };

  return { beadsData, handleClick };
};
