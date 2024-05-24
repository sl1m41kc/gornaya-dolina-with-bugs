import PoolSVG from '@/public/sprites/icons/pool.svg'
import PetsSVG from '@/public/sprites/icons/pets.svg'
import ChildSVG from '@/public/sprites/icons/child.svg'
import SaunaSVG from '@/public/sprites/icons/sauna.svg'
import WifiSVG from '@/public/sprites/icons/wifi.svg'
import WaterSVG from '@/public/sprites/icons/waves.svg'
import LocationSVG from '@/public/sprites/icons/location.svg'
import RestaurantSVG from '@/public/sprites/icons/restaurant.svg'
import LaundrySVG from '@/public/sprites/icons/laundry.svg'
import GrillSVG from '@/public/sprites/icons/grill.svg'
import ParkingSVG from '@/public/sprites/icons/parking.svg'
import MiteSVG from '@/public/sprites/icons/mite.svg'
import ToysSVG from '@/public/sprites/icons/toys.svg'
import Credit_cardSVG from '@/public/sprites/icons/credit_card.svg'
import TransferSVG from '@/public/sprites/icons/transfer.svg'

import gallery1 from '@/public/images/gallery/1.png'
import gallery2 from '@/public/images/gallery/2.png'
import gallery3 from '@/public/images/gallery/3.png'

import KayakingSVG from '@/public/sprites/icons/kayaking.svg'
import HikingSVG from '@/public/sprites/icons/hiking.svg'
import MotorSportSVG from '@/public/sprites/icons/motorsport.svg'

export const data = {
  houses: [
    {
      subtitle: "2-местный",
      imageSrc: "/images/2places.png",
    },
    {
      subtitle: "3-местный",
      imageSrc: "/images/3places.png",
    },
  ],
  advantages: [
    {
        title: "Бассейн",
        description: <>У&nbsp;нас есть где охладиться жарким деньком. Бесплатно!</>,
        icon: <PoolSVG />
    },
    {
        title: "Можно с животными",
        description: <>Мы&nbsp;всегда рады нашим четвероногим постояльцам.</>,
        icon: <PetsSVG />
    },
    {
        title: 'Детская площадка',
        description: <>На&nbsp;территории есть детская площадка и&nbsp;батут.</>,
        icon: <ChildSVG />
    },
    {
        title: "Баня",
        description: <>В&nbsp;двух шагах находится банный двор с&nbsp;баней и&nbsp;чанами.</>,
        icon: <SaunaSVG />
    },
    {
        title: "wi-fi",
        description: <>На&nbsp;территории базы есть бесплатный wi-fi.</>,
        icon: <WifiSVG />
    },
    {
        title: 'Река',
        description: <>В&nbsp;7&nbsp;минутах ходьбы находится река Катунь.</>,
        icon: <WaterSVG />
    },
    {
        title: 'Оптимальное расположение',
        description: <>Легко добраться до&nbsp;популярных достопримечательностей Чемала.</>,
        icon: <LocationSVG />
    },
    {
        title: "Общая кухня",
        description: <>На&nbsp;общей оборудованной кухне вы&nbsp;всегда сможете приготовить себе еду. В&nbsp;вашем распоряжении чай, кофе, крупы, соль, сахар, приправы.</>,
        icon: <RestaurantSVG />
    },
    {
        title: "Прачечная",
        description: <>Стирка + сушка&nbsp;&mdash; 300&nbsp;руб.</>,
        icon: <LaundrySVG />
    },
    {
        title: "Костровая зона",
        description: <>Провести вечер у&nbsp;костра под звездами в&nbsp;приятной компании&nbsp;&mdash; незабываемо.</>,
        icon: <GrillSVG />
    },
    {
        title: "Парковка",
        description: <>На&nbsp;территории есть парковка для ваших автомобилей.</>,
        icon: <ParkingSVG />
    },
    {
        title: "Никаких клещей",
        description: <>Вся территория базы обработана от&nbsp;клещей.</>,
        icon: <MiteSVG />
    },
    {
        title: "Настольные игры",
        description: <>У&nbsp;нас вы&nbsp;можете взять настольные игры.</>,
        icon: <ToysSVG />
    },
    {
        title: "Способы оплаты",
        description: <>Вы&nbsp;можете расплатиться наличными, картой, переводом или через расчетный счет.</>,
        icon: <Credit_cardSVG />
    },
    {
        title: "Трансфер",
        description: <>Мы&nbsp;организуем трансфер по&nbsp;вашему запросу.</>,
        icon: <TransferSVG />
    },
  ],
  gallery: [gallery1, gallery2, gallery3],
  camping: [
    {
        title: 'Сплавы',
        icon: <KayakingSVG />,
        imageSrc: '/images/camping/1.png'
    },
    {
        title: <>Прогулки <span>(пешие, вело, конные)</span></>,
        icon: <HikingSVG />,
        imageSrc: '/images/camping/2.png'
    },
    {
        title: 'Туры на квадроциклах',
        icon: <MotorSportSVG />,
        imageSrc: '/images/camping/3.png'
    }
  ]
};
