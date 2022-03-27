let inputKey = document.querySelector(".display__pressAnyKey");
let keyDisplay = document.querySelector(".display__keyDisplay");
let eventKeyData = document.querySelector(".card__eventKeyData");
let eventLocationData = document.querySelector(".card__eventLocationData");
let eventWhichData = document.querySelector(".card__eventWhichData");
let eventCodeData = document.querySelector(".card__eventCodeData");
window.addEventListener("keydown", (event) => {
  inputKey.style.display = "none";
  keyDisplay.textContent = event.keyCode;
  eventKeyData.textContent = event.key;
  eventLocationData.textContent = event.location;
  eventWhichData.textContent = event.keyCode;
  eventCodeData.textContent = event.code;
});
