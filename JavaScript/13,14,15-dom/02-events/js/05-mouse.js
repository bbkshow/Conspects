/**
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event)
 * Mouse coordinates: https://nerdparadise.com/programming/javascriptmouseposition
 */

let boxRef = document.querySelector('.js-box');

// boxRef.addEventListener("mouseenter", (evt) => {
//     console.log(evt);
// });

// boxRef.addEventListener("mouseover", (evt) => {
//     console.log(evt);
// });

// Chatty event
// boxRef.addEventListener("mousemove", (evt) => {
//     console.log(evt);
// });

//=================================

boxRef.addEventListener('mouseenter', (evt) => {
  console.log(evt);
  evt.target.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', (evt) => {
  console.log(evt);
  evt.target.classList.remove('box--active');
});
