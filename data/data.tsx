import PoolSVG from "@/public/sprites/icons/pool.svg";
import PetsSVG from "@/public/sprites/icons/pets.svg";
import ChildSVG from "@/public/sprites/icons/child.svg";
import SaunaSVG from "@/public/sprites/icons/sauna.svg";
import WifiSVG from "@/public/sprites/icons/wifi.svg";
import WaterSVG from "@/public/sprites/icons/waves.svg";
import LocationSVG from "@/public/sprites/icons/location.svg";
import RestaurantSVG from "@/public/sprites/icons/restaurant.svg";
import LaundrySVG from "@/public/sprites/icons/laundry.svg";
import GrillSVG from "@/public/sprites/icons/grill.svg";
import ParkingSVG from "@/public/sprites/icons/parking.svg";
import MiteSVG from "@/public/sprites/icons/mite.svg";
import ToysSVG from "@/public/sprites/icons/toys.svg";
import Credit_cardSVG from "@/public/sprites/icons/credit_card.svg";
import TransferSVG from "@/public/sprites/icons/transfer.svg";

import gallery1 from "@/public/images/gallery/1.png";
import gallery2 from "@/public/images/gallery/2.png";
import gallery3 from "@/public/images/gallery/3.png";

import KayakingSVG from "@/public/sprites/icons/kayaking.svg";
import HikingSVG from "@/public/sprites/icons/hiking.svg";
import MotorSportSVG from "@/public/sprites/icons/motorsport.svg";

import FullScreenSVG from "@/public/sprites/icons/fullscreen.svg";
import BedPlusChairSVG from "@/public/sprites/icons/bedPlusChair.svg";
import SingleBedSVG from "@/public/sprites/icons/singleBed.svg";
import ShowerSVG from "@/public/sprites/icons/shower.svg";
import HairDryerSVG from "@/public/sprites/icons/hairdryer.svg";
import LandScapeSVG from "@/public/sprites/icons/landscape.svg";
import TerraceSVG from "@/public/sprites/icons/landscape.svg";
import HeatSVG from "@/public/sprites/icons/heat.svg";
import BedSVG from '@/public/sprites/icons/bed.svg'

import houseTerracePhoto from "@/public/images/houses/terrace.jpg";
import houseShampooPhoto from "@/public/images/houses/shampoo.jpg";
import houseTowelsPhoto from "@/public/images/houses/towels.jpg";
import houseRobesPhoto from "@/public/images/houses/robes.jpg";

import house0PhotoGallery1 from "@/public/images/houses/0/1.jpg";
import house0PhotoGallery2 from "@/public/images/houses/0/2.jpg";
import house0PhotoGallery3 from "@/public/images/houses/0/3.jpg";
import house0PhotoGallery4 from "@/public/images/houses/0/4.jpg";
import house0PhotoGallery5 from "@/public/images/houses/0/5.jpg";
import house0PhotoGallery6 from "@/public/images/houses/0/6.jpg";
import house0PhotoGallery7 from "@/public/images/houses/0/7.jpg";

import house1PhotoGallery1 from "@/public/images/houses/1/1.jpg";
import house1PhotoGallery2 from "@/public/images/houses/1/2.jpg";
import house1PhotoGallery3 from "@/public/images/houses/1/3.jpg";
import house1PhotoGallery4 from "@/public/images/houses/1/4.jpg";

export const data = {
  houses: [
    {
      subtitle: "2-местный",
      imageSrc: "/images/2places.png",
      href: "/house/0",
    },
    {
      subtitle: "3-местный",
      imageSrc: "/images/3places.png",
      href: "/house/1",
    },
  ],
  advantages: [
    {
      title: "Бассейн",
      description: (
        <>У&nbsp;нас есть где охладиться жарким деньком. Бесплатно!</>
      ),
      icon: <PoolSVG />,
    },
    {
      title: "Можно с животными",
      description: <>Мы&nbsp;всегда рады нашим четвероногим постояльцам.</>,
      icon: <PetsSVG />,
    },
    {
      title: "Детская площадка",
      description: <>На&nbsp;территории есть детская площадка и&nbsp;батут.</>,
      icon: <ChildSVG />,
    },
    {
      title: "Баня",
      description: (
        <>В&nbsp;двух шагах находится банный двор с&nbsp;баней и&nbsp;чанами.</>
      ),
      icon: <SaunaSVG />,
    },
    {
      title: "wi-fi",
      description: <>На&nbsp;территории базы есть бесплатный wi-fi.</>,
      icon: <WifiSVG />,
    },
    {
      title: "Река",
      description: <>В&nbsp;7&nbsp;минутах ходьбы находится река Катунь.</>,
      icon: <WaterSVG />,
    },
    {
      title: "Оптимальное расположение",
      description: (
        <>Легко добраться до&nbsp;популярных достопримечательностей Чемала.</>
      ),
      icon: <LocationSVG />,
    },
    {
      title: "Общая кухня",
      description: (
        <>
          На&nbsp;общей оборудованной кухне вы&nbsp;всегда сможете приготовить
          себе еду. В&nbsp;вашем распоряжении чай, кофе, крупы, соль, сахар,
          приправы.
        </>
      ),
      icon: <RestaurantSVG />,
    },
    {
      title: "Прачечная",
      description: <>Стирка + сушка&nbsp;&mdash; 300&nbsp;руб.</>,
      icon: <LaundrySVG />,
    },
    {
      title: "Костровая зона",
      description: (
        <>
          Провести вечер у&nbsp;костра под звездами в&nbsp;приятной
          компании&nbsp;&mdash; незабываемо.
        </>
      ),
      icon: <GrillSVG />,
    },
    {
      title: "Парковка",
      description: <>На&nbsp;территории есть парковка для ваших автомобилей.</>,
      icon: <ParkingSVG />,
    },
    {
      title: "Никаких клещей",
      description: <>Вся территория базы обработана от&nbsp;клещей.</>,
      icon: <MiteSVG />,
    },
    {
      title: "Настольные игры",
      description: <>У&nbsp;нас вы&nbsp;можете взять настольные игры.</>,
      icon: <ToysSVG />,
    },
    {
      title: "Способы оплаты",
      description: (
        <>
          Вы&nbsp;можете расплатиться наличными, картой, переводом или через
          расчетный счет.
        </>
      ),
      icon: <Credit_cardSVG />,
    },
    {
      title: "Трансфер",
      description: <>Мы&nbsp;организуем трансфер по&nbsp;вашему запросу.</>,
      icon: <TransferSVG />,
    },
  ],
  gallery: [gallery1, gallery2, gallery3],
  camping: [
    {
      title: "Сплавы",
      icon: <KayakingSVG />,
      imageSrc: "/images/camping/1.png",
    },
    {
      title: (
        <>
          Прогулки <span>(пешие, вело, конные)</span>
        </>
      ),
      icon: <HikingSVG />,
      imageSrc: "/images/camping/2.png",
    },
    {
      title: "Туры на квадроциклах",
      icon: <MotorSportSVG />,
      imageSrc: "/images/camping/3.png",
    },
  ],
  reviews: [
    {
      name: "Дарья Мауль",
      description: (
        <>
          Добрый день,всем однозначно рекомендую остановиться именно
          на&nbsp;этой базе. Здесь идеально все, начиная с&nbsp;замечательных
          хозяев и&nbsp;заканчивая комфортными условиями проживания. Продумано
          все до&nbsp;самых мелочей (посуда,мангальная зона с&nbsp;решетками
          и&nbsp;шампурами,халаты,полотенца,турка для кофе,включая и&nbsp;сам
          кофе😅)Все очень чистое,новое,чувствуется что в&nbsp;эту базу вложили
          душу🙏🏽Большое Спасибо,желаем вам процветания и&nbsp;позитивных
          клиентов🙌🏽
        </>
      ),
      date: "13 мая 2024",
    },
    {
      name: "Екатерина Лункина",
      description: (
        <>
          Нам очень понравилось! Заехали поздно вечером, нас радушно встретил
          Михаил, все показал, предложил уголь для мангала (свой
          мы&nbsp;забыли). А&nbsp;утром обалдели от&nbsp;красоты из&nbsp;окон
          в&nbsp;пол. Все продумано до&nbsp;мелочей, полотенец много, халаты,
          постельное, не&nbsp;всегда в&nbsp;отеле такое встретишь. На&nbsp;кухне
          можно готовить, вся утварь в&nbsp;наличии. Чай, кофе. Приехали
          на&nbsp;майские с&nbsp;ребенком и&nbsp;лабрадором, все счастливы. Всем
          приятного отдыха!)
        </>
      ),
      date: "1 мая 2024",
    },
    {
      name: "​Игорь Ячный",
      description: (
        <>
          Отличное тихое и&nbsp;живописное место для семейного отдыха.Удобные
          чистые номера,добродушные хозяева.
        </>
      ),
      date: "4 сентября 2023",
    },
    {
      name: "Дарья Коваленко",
      description: (
        <>
          Спасибо хозяевам за&nbsp;такие крутые домики🤩обязательно будем
          советовать всем знакомым! Крутая локация, дома из&nbsp;бруса, прям
          пахнет деревом😻 все чисто,уютно! Хоть и&nbsp;кухня общая,это вообще
          не&nbsp;смущало! Территория обустроенная-качели,беседка
          и&nbsp;бассейн! Вообщем 10/10,обязательно вернемся в&nbsp;след году!
        </>
      ),
      date: "13 августа 2023",
    },
    {
      name: "Михаил Михаил",
      description: (
        <>
          Супер база! Есть все необходимое, домики чистые деревянные
          с&nbsp;запахом дерева, парковка на&nbsp;территории, а&nbsp;самое
          главное можно с&nbsp;домашними животными!!)) на&nbsp;территории живет
          добродушная хаски Луна, которую можно почесать за&nbsp;ушком
          по&nbsp;приезду и&nbsp;насладиться прекрасными горными пейзажами
          вокруг)
        </>
      ),
      date: "1 августа 2023",
    },
  ],
  housesPage: [
    {
      title: "2-местный номер",
      mainImage: {
        src: "/images/houses/0/1.jpg",
        alt: "2-местный номер основное фото",
      },
      description: (
        <>
          Каждый домик оборудован большими панорамными окнами, через которые
          открывается захватывающий вид на&nbsp;величественные горы. Представьте
          себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
          вершины золотистым светом, или как вечерние сумерки придают горам
          мистическое очарование.
        </>
      ),
      price: 4000,
      advantages: [
        {
          title: <>Площадь номера&nbsp;&mdash; 18&nbsp;м2</>,
          icon: <FullScreenSVG />,
        },
        {
          title: <>Двуспальная кровать</>,
          icon: <BedSVG />,
        },
        {
          title: <>Одно дополнительное место</>,
          icon: <SingleBedSVG />,
        },
        {
          title: <>Санузел и&nbsp;душ в&nbsp;номере</>,
          icon: <ShowerSVG />,
        },
        {
          title: <>Фен, полотенца, халаты, тапочки</>,
          icon: <HairDryerSVG />,
        },
        {
          title: <>Панорамный вид на&nbsp;горы</>,
          icon: <LandScapeSVG />,
        },
        {
          title: <>Терраса у&nbsp;каждого домика</>,
          icon: <TerraceSVG />,
        },
        {
          title: <>К&nbsp;нам можно с&nbsp;животными</>,
          icon: <PetsSVG />,
        },
        {
          title: <>wi-fi</>,
          icon: <WifiSVG />,
        },
        {
          title: <>Обогреватель</>,
          icon: <HeatSVG />,
        },
      ],
      slider: [
        house0PhotoGallery1,
        house0PhotoGallery2,
        house0PhotoGallery3,
        house0PhotoGallery4,
        houseTerracePhoto,
        house0PhotoGallery5,
        house0PhotoGallery6,
        house0PhotoGallery7,
        houseShampooPhoto,
        houseTowelsPhoto,
        houseRobesPhoto,
      ],
    },
    {
      title: "3-местный номер",
      mainImage: {
        src: "/images/houses/1/1.jpg",
        alt: "3-местный номер основное фото",
      },
      description: (
        <>
          Каждый домик оборудован большими панорамными окнами, через которые
          открывается захватывающий вид на&nbsp;величественные горы. Представьте
          себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
          вершины золотистым светом, или как вечерние сумерки придают горам
          мистическое очарование.
        </>
      ),
      price: 5000,
      advantages: [
        {
          title: <>Площадь номера&nbsp;&mdash; 20&nbsp;м2</>,
          icon: <FullScreenSVG />,
        },
        {
          title: <>Двуспальная кровать и&nbsp;раскладной диван</>,
          icon: <BedPlusChairSVG />,
        },
        {
          title: <>Одно дополнительное место</>,
          icon: <SingleBedSVG />,
        },
        {
          title: <>Санузел и&nbsp;душ в&nbsp;номере</>,
          icon: <ShowerSVG />,
        },
        {
          title: <>Фен, полотенца, халаты, тапочки</>,
          icon: <HairDryerSVG />,
        },
        {
          title: <>Панорамный вид на&nbsp;горы</>,
          icon: <LandScapeSVG />,
        },
        {
          title: <>Терраса у&nbsp;каждого домика</>,
          icon: <TerraceSVG />,
        },
        {
          title: <>К&nbsp;нам можно с&nbsp;животными</>,
          icon: <PetsSVG />,
        },
        {
          title: <>wi-fi</>,
          icon: <WifiSVG />,
        },
        {
          title: <>Обогреватель</>,
          icon: <HeatSVG />,
        },
      ],
      slider: [
        house1PhotoGallery1,
        house1PhotoGallery2,
        houseTerracePhoto,
        house1PhotoGallery3,
        house1PhotoGallery4,
        houseShampooPhoto,
        houseTowelsPhoto,
        houseRobesPhoto,
      ],
    },
  ],
};
