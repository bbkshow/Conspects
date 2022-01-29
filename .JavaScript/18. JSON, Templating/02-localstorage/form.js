let formRef = document.querySelector(".js-feedback-form");
let textAreaRef = document.querySelector("textarea");

formRef.addEventListener("submit", formSubmitHandler);
textAreaRef.addEventListener("input", messageHandleSubmit);

getMsgFromLocalStorage();

function messageHandleSubmit(event) {
    // console.log(event.target.name);
    // console.log(event.target.placeholder);
    // console.log(event.target.value);
    let message = event.target.value;
    console.log(message);
    localStorage.setItem("feedback", message);
}

function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Submit");
    let msg = localStorage.getItem("feedback");
    if (msg) {
        localStorage.removeItem("feedback");
        event.target.reset();
    }
}

function getMsgFromLocalStorage() {
    let msg = localStorage.getItem("feedback");
    if (msg) {
        console.log("Find!!!");
        textAreaRef.textContent = msg;
    }
}
