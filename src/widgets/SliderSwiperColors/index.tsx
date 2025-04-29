import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Color } from "../../shared/types/Colors";
import styles from "./styles.module.scss";

interface SliderSwiperColorsProps {
  setSelectedColor: (src: string) => void;
  colors: Color[];
  setRandomBeadColors: (randomColor: string) => void;
}

const SliderSwiperColors = ({
  setSelectedColor,
  colors,
  setRandomBeadColors,
}: SliderSwiperColorsProps) => {
  const [activeColor, setActiveColor] = useState<number | null>(null);

  const handleClickOnColor = (id: number, src: string) => {
    setActiveColor(id);
    setSelectedColor(src);
    if (src === "/colorsOfBeads/00.png") {
      // Генерация случайного монохромного цвета кроме радужного
      let randomColor;
      do {
        randomColor = colors[Math.floor(Math.random() * colors.length)].src;
      } while (randomColor === "/colorsOfBeads/00.png");
      // Установка beadsData в родительском компоненте
      setRandomBeadColors(randomColor);
    }
  };

  const slides = colors.map((color) => (
    <SwiperSlide key={color.id} className={styles.slide}>
      <img
        src={color.src}
        alt={`Color ${color.id}`}
        onClick={() => handleClickOnColor(color.id, color.src)}
        className={`${activeColor === color.id ? styles.colorActive : ""}`}
      />
    </SwiperSlide>
  ));

  const swiperParams = {
    modules: [Navigation],
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: `.${styles.next}`,
      prevEl: `.${styles.prev}`,
    },
    draggable: true,
    breakpoints: {
      1280: {
        slidesPerView: 12,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 8,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 7,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 5,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.prev}>
        <img src="/icons/arrow.png" alt="Previous" draggable="false" />
      </div>
      <Swiper {...swiperParams} style={{ padding: "10px 5px" }}>
        {slides}
      </Swiper>

      <div className={styles.next}>
        <img src="/icons/arrow.png" alt="Next" draggable="false" />
      </div>
    </div>
  );
};

export default SliderSwiperColors;
