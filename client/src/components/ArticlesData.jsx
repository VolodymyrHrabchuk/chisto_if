import article1 from "../assets/img/article-1.png";
import article2 from "../assets/img/article-2.png";
import article3 from "../assets/img/article-3.png";

const splitTextIntoParagraphs = (fullText) => {
  return fullText.split('\n');
};

const articlesData = [
  {
    title: "Домашні улюбленці: як ефективно позбавитись шерсті",
    image: article1,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "18/02/2022",
    link: "/blog/article1",
    fullText:
      "Як позбутися від шерсті кішки в квартирі \n Волос, обсипається під час линьки, липне до килимів, одягу і меблів, і позбутися від нього буває дуже проблематично. \n Позбутися від жмутів котячого хутра можна за допомогою пилососа, вологого прибирання, щітки або валика.Боротися з шерстю можна за допомогою потужного пилососа. Він відмінно справляється з великими скупченнями котячих волосся, особливо якщо в комплекті є різні насадки. Кращою з них вважається турбощітка. Вона ідеально очищає м’які поверхні від довгих і коротких шерстинок. Найефективніше з прибиранням вовни кішок справляються миючі пилососи. Вони відмінно прибирають невеликий ворс, не даючи йому розлітатися по дому. Якщо пилосос звичайний, перед початком збирання на поверхні, що очищається рекомендовано розпорошити воду. \nПозбутися від котячого ворсу в квартирі можна і за допомогою робота-пилососа. Цей прилад допомагає заощадити багато часу, але в процесі збирання іноді пропускає окремі ділянки.",
  },
  {
    title: "Токсичні складники найпопулярніших миючих засобів",
    image: article2,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "18/02/2022",
    link: "/blog/article2",
    fullText: "The full text of the second article goes here...",
  },
  {
    title: "Правильне миття вікон",
    image: article3,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "18/02/2022",
    link: "/blog/article3",
    fullText: "The full text of the third article goes here...",
  },
  {
    title: "Правильне миття вікон",
    image: article3,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "18/02/2022",
    link: "/blog/article3",
    fullText: "The full text of the fourth article goes here...",
  },
  // Add more articles as needed
];

// Add paragraphs property to each article
articlesData.forEach(article => {
  article.paragraphs = splitTextIntoParagraphs(article.fullText);
});

export default articlesData;
