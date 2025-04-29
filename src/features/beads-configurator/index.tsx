import { useEffect, useState } from "react";
import Beads from "../../widgets/Beads";
import Modes from "../../widgets/Modes";
import Navigation from "../../widgets/Navigation";
import SliderSwiperColors from "../../widgets/SliderSwiperColors";
import { initialBeadsData } from "../../app/data/BeadsData";
import { colors } from "../../app/data/colorsData";
import styles from "./styles.module.scss";

const BeadsConfigurator = () => {
  const [selectedColorSrc, setSelectedColorSrc] = useState<string>("");
  const [selectedColorName, setSelectedColorName] = useState<string>("");
  const [showColorLabel, setShowColorLabel] = useState<boolean>(false); // Состояние для управления видимостью плашки
  const [mode, setMode] = useState<string>("monochrome");

  // Нажатие кнопки выбора режима
  const handleSetMode = (newMode: string) => {
    setMode(newMode);
  };

  // Нажатие радужной кнопки
  const setRandomBeadColors = (randomColor: string) => {
    setSelectedColorSrc(randomColor);
  };

  // Эффект для скрытия плашки через 1 секунду
  useEffect(() => {
    if (showColorLabel) {
      const timer = setTimeout(() => {
        setShowColorLabel(false);
      }, 1000);
      // Очистка таймера при размонтировании или изменении состояния
      return () => clearTimeout(timer);
    }
  }, [showColorLabel]);

  const handleSetSelectedColorName = (name: string) => {
    setSelectedColorName(name);
    // Показываем плашку при выборе цвета
    setShowColorLabel(true);
  };

  return (
    <div className={styles.configuratorContainer}>
      <Beads
        initialBeadsData={initialBeadsData}
        mode={mode}
        selectedColorSrc={selectedColorSrc}
        selectedColorName={showColorLabel ? selectedColorName : ""}
      />
      <Modes setMode={handleSetMode} />
      <SliderSwiperColors
        setSelectedColorSrc={setSelectedColorSrc}
        colors={colors}
        setRandomBeadColors={setRandomBeadColors}
        setSelectedColorName={handleSetSelectedColorName}
      />
      <Navigation />
    </div>
  );
};

export default BeadsConfigurator;
