// Defining the variable and functions to calculate area
// Variables to store the lenght and width provided by the user
let length;
let width;

// Function to calculate the area of the rectangle by calling the values of length and width provided by the user
// The parseFloat() function converts the string value retrieved from the input field to a floating-point number. This conversion ensures that the input, typically text entered by the user, is treated as a number and can be used in mathematical operations.
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value)

// Declare area variable and initialize it with length * width
let area = length * width;
}

// Display the results to the user interface
document.getElementById('results').innerText = 'The area of the rectangle is: ${area}';