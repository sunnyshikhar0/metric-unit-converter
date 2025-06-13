const inputEl = document.getElementById("input-el");
const convertEl = document.getElementById("convert-el");
const answerInLengthEl = document.getElementById("answer-inlength-el");
const answerInVolumeEl = document.getElementById("answer-involume-el");
const answerInMassEl = document.getElementById("answer-inmass-el");

convertEl.addEventListener("click", function () {
  convertInLength(inputEl.value);
  convertInVolume(inputEl.value);
  convertInMass(inputEl.value);
  inputEl.value = "";
});

function convertInLength(value) {
  const resultInFeet = value * 3.281;
  const resultInMeter = value / 3.281;

  answerInLengthEl.textContent = `${value} meters = ${Number(
    resultInFeet,
  ).toFixed(3)} feet | ${value} feet = ${Number(resultInMeter).toFixed(
    3,
  )} meters`;
}

function convertInVolume(value) {
  const resultInGallons = value * 0.264;
  const resultInLitres = value / 0.264;

  answerInVolumeEl.textContent = `${value} litres = ${Number(
    resultInGallons,
  ).toFixed(3)} gallons | ${value} gallons = ${Number(resultInLitres).toFixed(
    3,
  )} litres`;
}

function convertInMass(value) {
  const resultInPounds = value * 2.204;
  const resultInKilos = value / 2.204;

  answerInMassEl.textContent = `${value} kilos = ${Number(
    resultInPounds,
  ).toFixed(3)} pounds | ${value} pounds = ${Number(resultInKilos).toFixed(
    3,
  )} kilos`;
}
