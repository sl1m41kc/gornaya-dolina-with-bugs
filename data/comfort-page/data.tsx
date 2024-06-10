import KAYAKING_MAIN_PHOTO from "@/public/images/camping/1.png";
import { comfortPageType } from "./types";
import KayakingSVG from "@/public/sprites/icons/kayaking.svg";
import HikingSVG from "@/public/sprites/icons/hiking.svg";
import MotorSportSVG from "@/public/sprites/icons/motorsport.svg";

export const comfortPageData: comfortPageType = [
  {
    type: "kayaking",
    title: "Сплавы",
    icon: <KayakingSVG />,
    description: (
      <>
        Каналом ощущается спокойная вода речки, соприкосновение с&nbsp;течением
        создает умиротворенное чувство. Плаваем по&nbsp;реке, наслаждаемся
        красотой пейзажа, отраженного в&nbsp;воде. Наслаждаемся уникальным
        опытом каякинга на&nbsp;реке, где вы&nbsp;можете почуствовать свободу
        и&nbsp;вольность. Каналом ощущается спокойная вода речки,
        соприкосновение с&nbsp;течением создает умиротворенное чувство. Плаваем
        по&nbsp;реке, наслаждаемся красотой пейзажа, отраженного в&nbsp;воде.
        Наслаждаемся уникальным опытом каякинга на&nbsp;реке, где вы&nbsp;можете
        почуствовать свободу и&nbsp;вольность.
      </>
    ),
    imageSrc: "/images/comfort/kayaking.png",
    slider: [KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO],
  },
  {
    title: <>Прогулки <span>(пешие, вело, конные)</span></>,
    icon: <HikingSVG />,
    type: "hiking",
    description: (
      <>
        Каналом ощущается спокойная вода речки, соприкосновение с&nbsp;течением
        создает умиротворенное чувство. Плаваем по&nbsp;реке, наслаждаемся
        красотой пейзажа, отраженного в&nbsp;воде. Наслаждаемся уникальным
        опытом каякинга на&nbsp;реке, где вы&nbsp;можете почуствовать свободу
        и&nbsp;вольность. Каналом ощущается спокойная вода речки,
        соприкосновение с&nbsp;течением создает умиротворенное чувство. Плаваем
        по&nbsp;реке, наслаждаемся красотой пейзажа, отраженного в&nbsp;воде.
        Наслаждаемся уникальным опытом каякинга на&nbsp;реке, где вы&nbsp;можете
        почуствовать свободу и&nbsp;вольность.
      </>
    ),
    imageSrc: "/images/comfort/hiking.png",
    slider: [KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO],
  },
  {
    title: "Туры на квадроциклах",
    icon: <MotorSportSVG />,
    type: "motorSport",
    description: (
      <>
        Каналом ощущается спокойная вода речки, соприкосновение с&nbsp;течением
        создает умиротворенное чувство. Плаваем по&nbsp;реке, наслаждаемся
        красотой пейзажа, отраженного в&nbsp;воде. Наслаждаемся уникальным
        опытом каякинга на&nbsp;реке, где вы&nbsp;можете почуствовать свободу
        и&nbsp;вольность. Каналом ощущается спокойная вода речки,
        соприкосновение с&nbsp;течением создает умиротворенное чувство. Плаваем
        по&nbsp;реке, наслаждаемся красотой пейзажа, отраженного в&nbsp;воде.
        Наслаждаемся уникальным опытом каякинга на&nbsp;реке, где вы&nbsp;можете
        почуствовать свободу и&nbsp;вольность.
      </>
    ),
    imageSrc: "/images/comfort/motorsport.png",
    slider: [KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO],
  },
];
