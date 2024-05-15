var quotesList = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde ―",
  },
  {
    quote: "So many books, so little time.",
    author: "― Frank Zappa ―",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein ―",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero ―",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West ―",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi ―",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain ―",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "― Elbert Hubbard ―",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide, Autumn Leaves ―",
  },
];
var noRepeat;
function newQuote() {
  var index = Math.floor(Math.random() * quotesList.length);
  if (noRepeat == index) {
    newQuote();
  } else {
    noRepeat = index;
    document.getElementById(
      "quote-con"
    ).innerHTML = `<p class="pb-1 p-media"> ${quotesList[index].quote}</p> <p class="fw-bold text-primary"> ${quotesList[index].author}</p>`;
  }
}
