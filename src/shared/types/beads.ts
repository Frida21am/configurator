export interface BeadOption {
  id: string;
  name: string;
  selected: boolean;
}

export interface BeadConfiguratorState {
  colorScheme: "monochrome" | "multicolor";
  options: BeadOption[];
  currentStep: number;
}
