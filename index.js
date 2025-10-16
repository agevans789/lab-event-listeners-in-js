// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const background = document.body;
  const colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)"];
  const currentIndex = colors.indexOf(background.style.backgroundColor);
  let nextIndex = (currentIndex + 1) % colors.length;
  background.style.backgroundColor = colors[nextIndex];
};

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  const background = document.body;
  const currentColor = background.style.backgroundColor;
  if (currentColor !== "") {
    background.style.backgroundColor = "";
  };
};

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const displayKeyPress = document.getElementById("keyPressDisplay");
  if (displayKeyPress) {
    displayKeyPress.textContent = event.key
  };
};

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const userInput = document.getElementById("textInput").value;
  const outputDisplay = document.getElementById("textInputDisplay");
  outputDisplay.textContent = userInput;
};

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  const button = document.getElementById("changeColorButton");
  if (button){
    button.addEventListener('click', changeBackgroundColor);
  };
  // Attach event listener to reset background color when the body is double-clicked

    document.body.addEventListener('dblclick', resetBackgroundColor);
  

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}