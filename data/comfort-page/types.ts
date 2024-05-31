import { StaticImageData } from "next/image";

export interface comfortPageItemType {
  title: string;
  icon: React.ReactNode;
  type: comfortPageItemName;
  description: React.ReactNode;
  imageSrc: string;
  slider: StaticImageData[];
}

export type comfortPageItemName = "kayaking" | "hiking" | "motorSport";

export type comfortPageType = comfortPageItemType[];
