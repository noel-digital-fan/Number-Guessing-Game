const minNumber = 1;
const maxNumber = 10;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const labelText = document.getElementById("labelText");
const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const attemptsLabel = document.getElementById("attemptsLabel");
const result = document.getElementById("result");

let attempts = 3;

console.log(answer); // Cheat to see the answer, SHHHH!!!!

labelText.textContent = `Try to guess the number between ${minNumber} and ${maxNumber}!`;
attemptsLabel.textContent = `Attempts left: ${attempts}`;

submit.onclick = function() {
    userInput.value = userInput.value.trim();
    if (submit.textContent === `Play Again`)
    {
        location.reload(); // Reload Webpage to reset settings
        return; //exit function
    }

    if (userInput.value == answer) // If user input matches with the answer
    {
        result.textContent = `You Won!`;
        submit.textContent = `Play Again`;
    }
    else
    {
        if (userInput.value == "" || userInput.value == null)
        {
            result.textContent = `Enter some value!`;
            return;
        }

        if (attempts === 1)
        {
            attempts = 0;
            attemptsLabel.textContent = `Attempts left: ${attempts}`;
            result.innerText = `You Lost :( \n Correct Answer ${answer}`;
            submit.textContent = `Play Again`;
        }
        else
        {
            attempts--;
            attemptsLabel.textContent = `Attempts left: ${attempts}`;
            result.textContent = `Wrong Answer!`;
        }
    }
}