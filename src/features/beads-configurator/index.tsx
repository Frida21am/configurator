import { useState } from "react";
import Beads from "../../widgets/Beads";
import Modes from "../../widgets/Modes";
import Navigation from "../../widgets/Navigation";
import SliderSwiperColors from "../../widgets/SliderSwiperColors";
import styles from "./styles.module.scss";

const BeadsConfigurator = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mode, setMode] = useState<string>("monochrome");

  //Цвета бусин в слайдере
  const colors = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    src: `/colorsOfBeads/${String(index).padStart(2, "0")}.png`,
  }));

  const handleSetMode = (newMode: string) => {
    setMode(newMode);
    if (newMode === "monochrome") {
      // Генерация случайного монохромного цвета
      const randomColor = colors[Math.floor(Math.random() * colors.length)].src;
      setSelectedColor(randomColor);
    }
  };

  return (
    <div className={styles.configuratorContainer}>
      <Beads selectedColor={selectedColor} mode={mode} colors={colors} />
      <Modes setMode={handleSetMode} />
      <SliderSwiperColors setSelectedColor={setSelectedColor} colors={colors} />
      <Navigation />
    </div>
  );
};

export default BeadsConfigurator;
