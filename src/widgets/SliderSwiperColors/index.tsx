import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./styles.module.scss";

interface Color {
  id: number;
  src: string;
}

interface SliderSwiperColorsProps {
  setSelectedColor: (src: string) => void;
  colors: Color[];
}

const SliderSwiperColors = ({
  setSelectedColor,
  colors,
}: SliderSwiperColorsProps) => {
  const handleClickOnColor = (src: string) => {
    setSelectedColor(src);
  };

  const slides = colors.map((color) => (
    <SwiperSlide key={color.id} className={styles.slide}>
      <img
        src={color.src}
        alt={`Color ${color.id}`}
        onClick={() => handleClickOnColor(color.src)}
      />
    </SwiperSlide>
  ));

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.prev}>
        <img src="/icons/arrow.png" alt="Previous" draggable="false" />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={12}
        slidesPerGroup={3}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        draggable={true}
      >
        {slides}
      </Swiper>

      <div className={styles.next}>
        <img src="/icons/arrow.png" alt="Next" draggable="false" />
      </div>
    </div>
  );
};

export default SliderSwiperColors;
