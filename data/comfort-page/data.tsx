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
        Сплавы на&nbsp;рафтах&nbsp;&mdash; это незабываемые впечатления, которые
        оживят вашу жизнь. Под руководством опытных инструкторов
        вы&nbsp;преодолеете пороги, ощутите бурные воды и&nbsp;насладитесь
        красотой окружающей природы. Это увлекательное путешествие принесет вам
        адреналин и&nbsp;восторг, запоминаясь на&nbsp;всю жизнь.
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
        Отправьтесь в&nbsp;захватывающие приключения, наслаждаясь живописными
        пейзажами и&nbsp;чистотой горных ручьев. Пешие маршруты позволят вам
        погрузиться в&nbsp;дикую природу, наслаждаясь каждым шагом. Для
        любителей верховой езды предлагаются увлекательные конные прогулки,
        которые позволят вам ощутить свободу и&nbsp;взаимодействие
        с&nbsp;лошадьми. Если вы&nbsp;предпочитаете скорость
        и&nbsp;динамичность, вам подойдут велосипедные прогулки, позволяющие
        исследовать даже самые отдаленные уголки Алтая. В&nbsp;любом случае,
        каждая прогулка станет для вас незабываемым приключением.
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
        Познакомьтесь с&nbsp;неповторимыми красотами Алтая. Туры
        на&nbsp;квадроциклах предоставляют уникальную возможность исследовать
        самые интересные места региона, недоступные для обычных автомобилей.
        Почувствуйте адреналин и&nbsp;свободу, преодолевая различные маршруты
        и&nbsp;препятствия под руководством опытных инструкторов. Независимо
        от&nbsp;вашего опыта, эти приключения наполнены удивительными пейзажами
        и&nbsp;яркими эмоциями.
      </>
    ),
    imageSrc: "/images/comfort/motorsport.png",
    slider: [KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO, KAYAKING_MAIN_PHOTO],
  },
];
