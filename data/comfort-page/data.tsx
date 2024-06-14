import KAYAKING_MAIN_PHOTO from "@/public/images/camping/1.png";
import { comfortPageType } from "./types";

import MotorSportSVG from "@/public/sprites/icons/motorsport.svg";
import MotorSportSlide1 from '@/public/images/comfort/motorsport/1.jpg'
import MotorSportSlide2 from '@/public/images/comfort/motorsport/2.jpg'
import MotorSportSlide3 from '@/public/images/comfort/motorsport/3.jpg'

import KayakingSVG from "@/public/sprites/icons/kayaking.svg";
import KayakingSlide1 from '@/public/images/comfort/kayaking/1.jpg'
import KayakingSlide2 from '@/public/images/comfort/kayaking/2.jpg'
import KayakingSlide3 from '@/public/images/comfort/kayaking/3.jpg'

import HikingSVG from "@/public/sprites/icons/hiking.svg";
import HikingSlide1 from '@/public/images/comfort/hiking/1.jpg'
import HikingSlide2 from '@/public/images/comfort/hiking/2.jpg'
import HikingSlide3 from '@/public/images/comfort/hiking/3.jpg'

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
    imageSrc: "/images/comfort/kayaking/main.jpg",
    slider: [KayakingSlide1, KayakingSlide2, KayakingSlide3],
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
    imageSrc: "/images/comfort/hiking/main.jpg",
    slider: [HikingSlide1, HikingSlide2, HikingSlide3],
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
    imageSrc: "/images/comfort/motorsport/main.jpg",
    slider: [MotorSportSlide1, MotorSportSlide2, MotorSportSlide3],
  },
];
