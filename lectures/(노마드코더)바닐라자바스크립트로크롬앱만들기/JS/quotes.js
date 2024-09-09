const quotes = [
  {
    quote: "내가 헛되이 보낸 오늘은 어제 죽은 이가 그토록 그리던 내일이다.",
    author: "소포 클래스",
  },
  {
    quote: "지나간 슬픔에 새로운 눈물을 낭비하지 말라",
    author: "에우리피데스",
  },
  {
    quote: "미래를 두려워하는 것은 현재를 낭비하는 것이다.",
    author: "존메이슨",
  },
  {
    quote: "꿈이 없다면, 인생은 쓰다",
    author: "리튼",
  },
  {
    quote: "생각하는 대로 살지 않으면 사는 대로 생각하게 된다.",
    author: "폴발레리",
  },
  {
    auote: "꿈을 품어라. 꿈이 없는 사람은 아무런 생명력이 없는 인형과 같다.",
    author: "그라시안",
  },
  {
    quote:
      "지금 당신이 무엇을 못가졌는지가 아니라, 당신이 가진 것으로 무엇을 할 수 있는지를 생각하라.",
    author: "어네스트 허밍웨이",
  },
  {
    quote: "승자의 주머니 속에는 꿈이 있고, 패자의 주머니 속에는 욕심이 있다.",
    author: "탈무드",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "니체",
  },
  {
    quote: "나는 생각한다. 고로 나는 존재한다.",
    author: "데카르트",
  },
  {
    quote: "의욕적인 목표가 인생을 즐겁게 한다.",
    author: "로버트 슐러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
