const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputtedWord = document.querySelector("input").value;

  const palindromeChecker = () => {
    const splitInputtedWord = inputtedWord.split("");
    const reverseInputtedWordArray = splitInputtedWord.reverse();
    const joinReverseInputtedWordArray = reverseInputtedWordArray.join("");

    if (joinReverseInputtedWordArray === inputtedWord) {
      result.innerHTML = `<h2>🎉 You've done it! ${inputtedWord} is a palindrome!!! 🎉</h2>`;
    } else {
      result.innerHTML = `<h2>🥺 Try another word... ${inputtedWord} is not a palindrome 🥺</h2>`;
    }
  };

  palindromeChecker();
});
