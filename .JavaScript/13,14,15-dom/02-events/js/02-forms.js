/*
 Event Submit
 Default browser actions
 Elements property
 Class FormData() - https://developer.mozilla.org/ru/docs/Web/API/FormData
*/

// let link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event);
// });
// console.log(link);

let formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event);

  let inputName = document.querySelector('input[name="name"]');
  // console.log(inputName);
  // console.log(inputName.value);
  // console.log(inputName.placeholder);
  // console.log(inputName.autocomplete);
  // console.log(inputName.type);

  // let inputEmail = document.querySelector('input[name="email"]');

  // console.log(inputEmail.type);

  // ===================
  // Elements
  // console.log(event.target);
  // let formRef = event.target;

  //    console.log(formRef.elements);
  // console.log(formRef.elements.name.value);
  // console.log(formRef.elements.email.value);
  // console.log(formRef.elements.password.value);
  // console.log(formRef.elements.subscription.value);

  // ============
  // FormData
  let formRef = event.target;
  let formData = new FormData(formRef);
  console.log(formData);

  let dataFromForm = {};
  formData.forEach((value, key) => {
    // console.log(value);
    // console.log(key);
    dataFromForm[key] = value;
  });

  console.log(dataFromForm);
});

// ?name=sara&email=sara%40i.ua&password=1234&subscription=basic

// vova['status'] = 'admin'
