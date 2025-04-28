import { useState } from "react";
import styles from "./styles.module.scss";

const SliderColors = () => {
  const totalBeads = 36;
  const visibleBeads = 12;
  const step = 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState("");

  const beads = Array.from({ length: totalBeads }, (_, i) => ({
    id: i,
    src: `/colorsOfBeads/${i.toString().padStart(2, "0")}.png`,
  }));

  // Дублируем бусины для бесшовной прокрутки
  const sliderItems = [...beads, ...beads.slice(0, visibleBeads)];

  const prevSlide = () => {
    setTransition("transform 0.5s ease-in-out");
    const newIndex = (currentIndex - step + totalBeads) % totalBeads;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setTransition("transform 0.5s ease-in-out");
    const newIndex = (currentIndex + step) % totalBeads;
    setCurrentIndex(newIndex);
  };

  // Сбрасываем transition после анимации
  const handleTransitionEnd = () => {
    setTransition("");
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.arrowButton} onClick={prevSlide}>
        <img src="/icons/arrow.png" alt="Прокрутить влево" />
      </button>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * (69 + 20)}px)`,
            transition: transition,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {sliderItems.map((circle, index) => (
            <div key={`${circle.id}-${index}`} className={styles.circle}>
              <img
                src={circle.src}
                alt={`Bead color ${circle.id}`}
                className={styles.circleImage}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrowButton} onClick={nextSlide}>
        <img
          src="/icons/arrow.png"
          alt="Прокрутить вправо"
          style={{ rotate: "180deg" }}
        />
      </button>
    </div>
  );
};

export default SliderColors;
