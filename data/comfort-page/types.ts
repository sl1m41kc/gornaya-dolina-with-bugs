import { StaticImageData } from "next/image";

export interface comfortPageItemType {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  type: comfortPageItemName;
  description: React.ReactNode;
  image: StaticImageData;
  slider: StaticImageData[];
}

export type comfortPageItemName = "kayaking" | "hiking" | "motorSport";

export type comfortPageType = comfortPageItemType[];
