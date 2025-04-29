import { useState } from "react";
import Beads from "../../widgets/Beads";
import Modes from "../../widgets/Modes";
import Navigation from "../../widgets/Navigation";
import SliderSwiperColors from "../../widgets/SliderSwiperColors";
import styles from "./styles.module.scss";
import { initialBeadsData } from "../../app/data/BeadsData";
import { colors } from "../../app/data/colorsData";

const BeadsConfigurator = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mode, setMode] = useState<string>("monochrome");

  // Нажатие кнопки выбора режима
  const handleSetMode = (newMode: string) => {
    setMode(newMode);
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
