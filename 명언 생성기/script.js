const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// 로딩 보여주기
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// 로딩 숨기기
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// let apiQuotes = [];

// show new quote
function newQuote() {
  loading();
  // pick a random quote from apiQuotes Array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // console.log(quote);
  // authorText.textContent = quote.author;

  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // 명언 길이 정하기
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  //명언 보여주기, 로딩숨기기
  quoteText.textContent = quote.text;
  complete();
}

// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {}
// }

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listers
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
// on Load
// getQuotes();
newQuote();
