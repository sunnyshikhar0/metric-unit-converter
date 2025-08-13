const inputEl = document.getElementById("input-el");
const convertEl = document.getElementById("convert-el");
const answerInLengthEl = document.getElementById("answer-inlength-el");
const answerInVolumeEl = document.getElementById("answer-involume-el");
const answerInMassEl = document.getElementById("answer-inmass-el");

// Create an error message element
const errorEl = document.createElement("p");
errorEl.id = "error-message";
errorEl.style.color = "red";
errorEl.style.fontSize = "small";
errorEl.style.marginTop = "10px";
errorEl.style.display = "none"; // Initially hidden
document.querySelector(".title-container").appendChild(errorEl);

// Add event listener to the convert button
convertEl.addEventListener("click", function () {
  const value = inputEl.value;

  // Validate input
  if (!value || isNaN(value) || value <= 0) {
    errorEl.textContent = "Please enter a valid positive number.";
    errorEl.style.display = "block"; // Show error message
    return;
  }

  // Hide error message if input is valid
  errorEl.style.display = "none";

  // Perform conversions
  convertInLength(value);
  convertInVolume(value);
  convertInMass(value);

  // Clear input field
  inputEl.value = "";
});

// Length conversion
function convertInLength(value) {
  const resultInFeet = value * 3.281;
  const resultInMeter = value / 3.281;

  answerInLengthEl.textContent = `${value} meters = ${Number(
    resultInFeet,
  ).toFixed(3)} feet | ${value} feet = ${Number(resultInMeter).toFixed(
    3,
  )} meters`;
}

// Volume conversion
function convertInVolume(value) {
  const resultInGallons = value * 0.264;
  const resultInLitres = value / 0.264;

  answerInVolumeEl.textContent = `${value} litres = ${Number(
    resultInGallons,
  ).toFixed(3)} gallons | ${value} gallons = ${Number(resultInLitres).toFixed(
    3,
  )} litres`;
}

// Mass conversion
function convertInMass(value) {
  const resultInPounds = value * 2.204;
  const resultInKilos = value / 2.204;

  answerInMassEl.textContent = `${value} kilos = ${Number(
    resultInPounds,
  ).toFixed(3)} pounds | ${value} pounds = ${Number(resultInKilos).toFixed(
    3,
  )} kilos`;
}
