//  Shop publick props Class

// class Rectangle {
//     height = 0;
//     width;
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// let btn = document.querySelector('button');
// console.log(btn);

// btn.addEventListener('click', () => {
//     console.log('BTN CLICK!!!');
// });

class Gallery {
  constructor(btn) {
    this.btn = btn;
  }

  // constructor() {
  //     this.btn = document.querySelector('button');
  // }

  // clickBtn = () => {
  //     console.log('Click!!!');
  // };

  // clickBtn() {
  //     console.log('Click!!!');
  // };

  clickBtn = function () {
    console.log('Click!!!');
  };

  init() {
    this.btn.addEventListener('click', this.clickBtn);
  }
}

let btn = document.querySelector('button');

let gallery = new Gallery(btn);
gallery.init();
// console.log(gallery.btn);
