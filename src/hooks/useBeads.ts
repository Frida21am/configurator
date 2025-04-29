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
        case "individual":
          updateIndividual(id);
          break;
        case "two-colors":
          updateTwoColors(id);
          break;
        case "one-bead":
          updateOneBead(id);
          break;
        default:
          break;
      }
    }
  };

  const updateIndividual = (id: number) => {
    setBeadsData((prev) =>
      prev.map((bead) =>
        bead.id === id ? { ...bead, src: selectedColorSrc } : bead
      )
    );
  };

  const updateTwoColors = (id: number) => {
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
  };

  const updateOneBead = (id: number) => {
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
  };

  return { beadsData, handleClick };
};
