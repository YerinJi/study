const quotes = [
    {
        quote : "불가능한 일을 해보는 것은 신나는 일이다.",
        author: "월트 디즈니",
    },
    {
        quote : "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
        author: "마이클 조던",
    },
    {
        quote : "삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
        author: "그랜마 모세",
    },
    {
        quote : "지나간 일로는 미래를 설계할 수 없다.",
        author: "애드먼드 버크",
    },
    {
        quote : "자기 신뢰 없이는 성공하지 못한다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote : "남의 앞에 나서는 것을 두려워하지 말라.",
        author: "엘마 윌러",
    },
    {
        quote : "실패도 배우는 것이 있으면 성공이다.",
        author: "월트 디즈니",
    },
    {
        quote : "실수를 두려워 말고 계속 도전하라.",
        author: "전 시몬스",
    },
    {
        quote : "산다는 것은 호흡하는 것이 아니라 행동하는 것이다.",
        author: "장 자크 루소",
    },
    {
        quote : "다른 사람의 좋은 습관을 내 습관으로 만들어라.",
        author: "빌 게이츠",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

