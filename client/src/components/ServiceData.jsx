import general from "../assets/img/general.webp";
import commercial from "../assets/img/commercial-img.webp";
import regular from "../assets/img/regular-cleaning.webp";
import renovation from "../assets/img/renovation.webp";
import windows from "../assets/img/windows.webp";
import furniture from "../assets/img/furniture.webp";
import floor from "../assets/img/floor.webp";

const ServiceData = [
  {
    imgSrc: general,
    heading: "Генеральне прибирання",
    description:
      "Генеральне прибирання, є глибоким і всеосяжним процесом прибирання, спрямоване на детальне очищення і оновлення приміщення. Сенс генерального прибирання полягає в тому, щоб повністю очистити приміщення від пилу, бруду, нальоту і забруднень, які можуть накопичуватись з часом.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.2,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: commercial,
    heading: "Прибирання комерції",
    description:
      "Чистота та охайність комерційних приміщеннь позитивно впливає на імідж компанії та підсилює бренд. Компанія, яка приділяє увагу прибиранню, відзначається як організація, яка піклується про своїх клієнтів та персонал.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.4,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: regular,
    heading: "Базове прибирання:",
    description:
      "Мета цього прибирання підтримувати чистоту та порядок, після проведення генерального прибирання. Зберегти приміщення у чистому охайному стані, а також зменшити накопичення бруду, пилу та забруднень. Цей підхід дозволяє зменшити зусилля і час, необхідний для проведення генерального прибирання, оскільки приміщення підтримується у гарному стані на постійній основі.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: renovation,
    heading: "Прибирання після ремонту:",
    description:
      "Повернемо до чистоти і ладу приміщення після будівельних або ремонтних робіт. Видалимо не тільки пил, а і залишки будівельних матеріалів. Насолоджуйтесь новим оновленим простором.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: windows,
    heading: "Миття вікон різного типу:",
    description:
      "Чисті вікна додають зовнішньої привабливості будинку,офісу або будь якого приміщення. Допомагає захистити скло від пошкоджень та корозії, що можуть виникати в наслідок накопичення пилу та бруду.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: furniture,
    heading: "Хімчистка м'яких меблів:",
    description:
      "Наші вміння, знання та сертифіковані мийні засоби допоможуть безпечно видалити забруднення, різного виду плям та бактерій з поверхі м'яких меблів.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
  {
    imgSrc: floor,
    heading: "Глибока чистка підлоги:",
    description:
      "Сенс глибокого чищення підлоги полягає в тому, щоб ефективно видалити глибоке забруднення з будь-якого підлогового покриття. Застосовується спеціальне обладнання та мийні засоби в залежності від типу підлоги.",
    motionProps: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
        x: 0,
      },
      viewport: { once: true },
    },
  },
];

export default ServiceData;
