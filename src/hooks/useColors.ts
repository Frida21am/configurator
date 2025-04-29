import { useState } from "react";
import { Color } from "../shared/types/Colors";

interface useColorsProps {
  colors: Color[];
  setSelectedColorName: (name: string) => void;
  setSelectedColorSrc: (src: string) => void;
  setRandomBeadColors: (randomColor: string) => void;
}

export const useColors = ({
  colors,
  setSelectedColorName,
  setSelectedColorSrc,
  setRandomBeadColors,
}: useColorsProps) => {
  const [activeColor, setActiveColor] = useState<number | null>(null);

  const handleClickOnColor = (id: number, src: string, name: string) => {
    setActiveColor(id);
    setSelectedColorSrc(src);
    setSelectedColorName(name);
    if (src === "/colorsOfBeads/00.png") {
      let randomColor;
      do {
        randomColor = colors[Math.floor(Math.random() * colors.length)].src;
      } while (randomColor === "/colorsOfBeads/00.png");
      setRandomBeadColors(randomColor);
    }
  };

  return { activeColor, handleClickOnColor };
};
