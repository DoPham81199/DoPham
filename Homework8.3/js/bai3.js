generateQuote();

function reloadPage() {
  generateQuote();
}

function generateQuote() {
  let getRand = Math.floor(Math.random() * 66);

  let quoteContent = document.getElementById("quoteContent");
  let quoteAuthor = document.getElementById("quoteAuthor");

  quoteContent.innerHTML = quoteData[getRand].quoteText;
  quoteAuthor.innerHTML = quoteData[getRand].quoteAuthor;
}