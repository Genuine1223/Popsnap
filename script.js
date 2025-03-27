// script.js
document.getElementById('checkButton').addEventListener('click', function() {
    const input = document.getElementById('numberInput');
    const resultDisplay = document.getElementById('resultDisplay');
    const number = parseInt(input.value);

    if (isNaN(number)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    if (number % 4 === 0 && number % 6 === 0) {
        resultDisplay.textContent = "PopSnap";
    } else if (number % 4 === 0) {
        resultDisplay.textContent = "Pop";
    } else if (number % 6 === 0) {
        resultDisplay.textContent = "Snap";
    } else {
        resultDisplay.textContent = number;
    }
});