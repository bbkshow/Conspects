import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// let link = React.createElement(
//   'a',
//   {
//     href: 'https://translate.google.com/',
//     target: '_blank',
//   },
//   'Google translate'
// );

// ReactDom.render(link, document.querySelector('#root'));

// console.log(link);

// let tittle = React.createElement('h3', {}, 'Kebab');
// let price = React.createElement('p', null, 'Price 10$');
// let button = React.createElement('button', { type: 'button' }, 'Add to cart');
// let image = React.createElement('img', {
//   src: 'https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612',
//   alt: 'kebab',
//   width: 450,
// });

// let product = React.createElement('div', {}, tittle, image, price, button);
// // console.log(product);
// ReactDom.render(product, document.querySelector('#root'));

// let link = React.createElement(
//   'a',
//   {
//     href: 'https://translate.google.com/',
//     target: '_blank',
//   },
//   'Google translate'
// );

// let link = (
//   <a href="https://translate.google.com/" target="_blank">
//     Google translate
//   </a>
// );
// ReactDom.render(link, document.querySelector('#root'));
// console.log(link);

// let product = (
//   // <Fragment>
//   <div>
//     <h3>Kebab</h3>
//     <img
//       src="https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612"
//       alt="kebab"
//       width="450"
//     />
//     <p>Price</p>
//     <button type="button">Add to cart</button>
//   </div>
//   //   </Fragment>
// );

// console.log(product);
// ReactDom.render(product, document.querySelector('#root'));

// let Product = (props) => (
//   <div>
//     <h3>Kebab</h3>
//     <img
//       src="https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612"
//       alt="kebab"
//       width="450"
//     />
//     <p>Price 10$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// let imageUrl =
//   'https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612';
// let price = 15;
// let Product = (props) => (
//   <div>
//     <h3>Kebab</h3>
//     <img src={imageUrl} alt="kebab" width="450" />
//     <p>Price {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDom.render(<Product />, document.querySelector('#root'));

let imageUrl =
  'https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612';
let price = 15;
// let Product = (props) => {
//   console.log(props);

//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <img src={props.imageUrl} alt="kebab" width="450" />
//       <p>Price {props.price}$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// };

let Product = ({ name, imageUrl, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt="kebab" width="450" />
      <p>Price {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

let App = (props) => {
  return (
    <>
      <Product
        imageUrl="https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612"
        name="Kebab"
        price="10"
      />
      <Product
        imageUrl="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Pizza"
        price="15"
      />
    </>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
