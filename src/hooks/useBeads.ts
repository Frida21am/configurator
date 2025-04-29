import { useState, useEffect } from "react";
import { Bead } from "../shared/types/beads";

export const useBeads = (
  initialData: Bead[],
  selectedColorSrc: string,
  mode: string
) => {
  const [beadsData, setBeadsData] = useState(initialData);

  // Режим Монохром
  useEffect(() => {
    if (mode === "monochrome" && selectedColorSrc) {
      setBeadsData((prev) =>
        prev.map((bead) => ({ ...bead, src: selectedColorSrc }))
      );
    }
  }, [selectedColorSrc, mode]);

  // Функция при нажатии на цвет из слайдера
  const handleClick = (id: number) => {
    if (selectedColorSrc && selectedColorSrc !== "/colorsOfBeads/00.png") {
      switch (mode) {
        // Режим Индивидуальный
        case "individual":
          setBeadsData((prev) =>
            prev.map((bead) =>
              bead.id === id ? { ...bead, src: selectedColorSrc } : bead
            )
          );
          break;
        // Режим 2 цвета
        case "two-colors":
          if (id <= 12) {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id <= 12 ? { ...bead, src: selectedColorSrc } : bead
              )
            );
          } else {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id > 12 ? { ...bead, src: selectedColorSrc } : bead
              )
            );
          }
          break;
        // Режим С 1 бусиной
        case "one-bead":
          if (id === 17) {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id === 17 ? { ...bead, src: selectedColorSrc } : bead
              )
            );
          } else {
            setBeadsData((prev) =>
              prev.map((bead) =>
                bead.id === 17 ? bead : { ...bead, src: selectedColorSrc }
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
