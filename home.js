// Array of quotes
let quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there.- Theodore Roosevelt"
  ];
  
  let currentQuoteIndex = 0;
  const quoteDisplay = document.getElementById('quoteDisplay');
  
  // Function to display current quote
  function displayQuote() {
    quoteDisplay.textContent = quotes[currentQuoteIndex];
  }
  
  // Function to display next quote
  function nextQuote() {
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes.length) {
      currentQuoteIndex = 0;
    }
    displayQuote();
  }
  
  // Function to display previous quote
  function previousQuote() {
    currentQuoteIndex--;
    if (currentQuoteIndex < 0) {
      currentQuoteIndex = quotes.length - 1;
    }
    displayQuote();
  }
  
  // Display initial quote
  displayQuote();
  