import { Bead } from "../../shared/types/beads";

// Изначальный массив из 25 бусин
export const initialBeadsData: Bead[] = Array.from(
  { length: 25 },
  (_, index) => ({
    id: index + 1,
    src: "/colorsOfBeads/03.png",
  })
);
