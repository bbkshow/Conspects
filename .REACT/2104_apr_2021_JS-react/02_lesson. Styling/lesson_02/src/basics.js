// React.createElement(type, [props], [...children])

import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// let link = React.createElement(
//     'a',
//     { href: 'https://translate.google.ru/', target: '_blank' },
//     'Google translate',
// );

// console.log(link);

// ReactDom.render(link, document.querySelector('#root'));

// let title = React.createElement('h3', null, 'Kebab');
// let price = React.createElement('p', {}, 'Price 10$');
// let button = React.createElement('button', { type: 'button' }, 'Add to cart');
// let image = React.createElement('img', {
//     src: 'https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     alt: 'kebab',
//     width: 450,
// });

// let product = React.createElement('div', null, title, image, price, button);
// let product = React.createElement('div', null, {
//     children: [title, image, price, button],
// });

// console.log(product);
// ReactDom.render(product, document.querySelector('#root'));

// JSX ====================================================
// let link = React.createElement(
//     'a',
//     { href: 'https://translate.google.ru/', target: '_blank' },
//     'Google translate',
// );

// let link = (
//     <a href="https://translate.google.ru/" target="_blank">
//         Google translate
//     </a>
// );

// console.log(link);

// ReactDom.render(link, document.querySelector('#root'));
// -----------------------------------------

// let title = React.createElement('h3', null, 'Kebab');
// let price = React.createElement('p', {}, 'Price 10$');
// let button = React.createElement('button', { type: 'button' }, 'Add to cart');
// let image = React.createElement('img', {
//     src: 'https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     alt: 'kebab',
//     width: 450,
// });

// let product = React.createElement('div', null, title, image, price, button);
// let product = React.createElement('div', null, {
//     children: [title, image, price, button],
// });

{
    /* <></> */
}
{
    /* <Fragment></Fragment> */
}
// let product = (
//     <div>
//         <h3>Kebab</h3>
//         <img
//             src="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             alt="kebab"
//             width="450"
//         />
//         <p>'Price 10$'</p>
//         <button type="button">'Add to cart'</button>
//     </div>
// );

// console.log(product);
// ReactDom.render(product, document.querySelector('#root'));

// ===============================
// Components

// let arr = [1, 2, 3, 4, 5, 6];

// let Product = props => (
//     <div>
//         <h3>{2 + 2}</h3>
//         <img
//             src="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             alt="kebab"
//             width="450"
//         />
//         <p>'Price 10$' {arr.length}</p>
//         <button type="button">'Add to cart'</button>
//     </div>
// );

// let imageUrl =
//     'https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
// let price = 15;

// let Product = props => {
//     console.log('props', props);

//     return (
//         <div>
//             <h3>Kebab</h3>
//             <img src={imageUrl} alt="kebab" width="450" />
//             <p>'Price {price}$'</p>
//             <button type="button">'Add to cart'</button>
//         </div>
//     );
// };

// ReactDom.render(<Product />, document.querySelector('#root'));

// ===========================================
//  Props

let imageUrl =
    'https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
let price = 15;

// let Product = props => {
//     console.log('props', props);

//     return (
//         <div>
//             <h3>{props.name}</h3>
//             <img src={props.imageUrl} alt="kebab" width="450" />
//             <p>'Price {props.price}$'</p>
//             <button type="button">'Add to cart'</button>
//         </div>
//     );
// };

let Product = ({ name, imageUrl, price }) => {
    // let { name, imageUrl, price } = props

    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} alt="kebab" width="450" />
            <p>'Price {price}$'</p>
            <button type="button">'Add to cart'</button>
        </div>
    );
};

let App = props => {
    return (
        <>
            <Product
                imageUrl="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                name="Kebab"
                price="10"
            />
            <Product
                imageUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                name="Pizza"
                price="15"
            />
        </>
    );
};
ReactDom.render(<App />, document.querySelector('#root'));

{
    /* <img src="cat"
<img src="dog"

<a href="google"
<a href="yahoo" */
}
