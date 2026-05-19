// Welcome message shown in the browser alert box.
alert("Welcome to Abraham's Calculator Project!");
// A matching message logged to the developer console .
console.log("Welcome to Abraham's Calculator Project!");

document.addEventListener('DOMContentLoaded', function() {
    // Cache a reference to the display area.
    let display = document.getElementById('display');

    // Adds a new character to the calculator display.
    // If the display currently shows just "0", replace it rather than append.
    window.appendToDisplay = function(value) {
        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    };

    // Clear the display back to the default starting value.
    window.clearDisplay = function() {
        display.innerText = '0';
    };

    // Evaluate the current expression shown in the display.
    // Replace ^ with JavaScript exponent syntax before calling eval.
    window.calculate = function() {
        try {
            const expression = display.innerText.replace(/\^/g, '**');
            display.innerText = eval(expression);
        } catch (error) {
            // If evaluation fails, show an error message instead of crashing.
            display.innerText = 'Error';
        }
    };
});
