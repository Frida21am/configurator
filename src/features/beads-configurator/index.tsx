import { useState } from "react";
import Beads from "../../widgets/Beads";
import Modes from "../../widgets/Modes";
import Navigation from "../../widgets/Navigation";
import SliderSwiperColors from "../../widgets/SliderSwiperColors";
import { Bead } from "../../shared/types/beads";
import styles from "./styles.module.scss";

const BeadsConfigurator = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mode, setMode] = useState<string>("monochrome");

  // Изначальный массив из 25 бусин
  const initialBeadsData: Bead[] = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    src: "/colorsOfBeads/03.png",
  }));

  //Цвета бусин в слайдере
  const colors = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    src: `/colorsOfBeads/${String(index).padStart(2, "0")}.png`,
  }));

  // Нажатие кнопки выбора режима
  const handleSetMode = (newMode: string) => {
    setMode(newMode);
    if (newMode === "monochrome") {
      // Генерация случайного монохромного цвета кроме радужного
      let randomColor;
      do {
        randomColor = colors[Math.floor(Math.random() * colors.length)].src;
      } while (randomColor === "/colorsOfBeads/00.png");
      setSelectedColor(randomColor);
    }
  };

  // Нажатие радужной кнопки
  const setRandomBeadColors = (randomColor: string) => {
    setSelectedColor(randomColor);
  };

  return (
    <div className={styles.configuratorContainer}>
      <Beads
        initialBeadsData={initialBeadsData}
        selectedColor={selectedColor}
        mode={mode}
      />
      <Modes setMode={handleSetMode} />
      <SliderSwiperColors
        setSelectedColor={setSelectedColor}
        colors={colors}
        setRandomBeadColors={setRandomBeadColors}
      />
      <Navigation />
    </div>
  );
};

export default BeadsConfigurator;
