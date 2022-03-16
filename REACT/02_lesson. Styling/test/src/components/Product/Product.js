import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

import './Product.scss';

import styles from './Product.module.css';

import styled from 'styled-components';

// console.log(styles);

// let Product = ({ name, imageUrl, price, qty }) => {
//   let inStock = qty < 50;

//   // let qtyClasses = ['Product__qty'];

//   // if (inStock) {
//   //   qtyClasses.push('awalable');
//   // } else {
//   //   qtyClasses.push('not-awalable');
//   // }

//   // qtyClasses.push(inStock ? 'awalable' : 'not-awalable');

//   let qtyClasses = ['Product__qty', inStock ? 'awalable' : 'not-awalable'];

//   let resultClass = qtyClasses.join(' ');
//   return (
//     <div className="Product">
//       <h3 className="Product__name">{name}</h3>
//       <img src={imageUrl} alt="kebab" width="450" />
//       <p>Price {price}$</p>
//       <span className={resultClass}>{inStock ? 'Few left' : 'In stock'}</span>
//       <br></br>
//       <br></br>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// };

//===============================================
// let Product = ({ name, imageUrl, price, qty }) => {
//   let inStock = qty < 50;

//   let qtyClasses = !inStock ? styles.awalable : styles['not-awalable'];

//   return (
//     <div className={styles.container}>
//       <h3 className={styles.name}>{name}</h3>
//       <img src={imageUrl} alt="kebab" width="450" />
//       <p>Price {price}$</p>
//       <span className={qtyClasses}>{inStock ? 'Few left' : 'In stock'}</span>
//       <br></br>
//       <br></br>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// };

let QuantityValue = styled.span`
  font-weight: 600;
  color: ${(props) => (props.isInStock ? 'red' : 'green')};
`;

let Product = ({ name, imageUrl, price, qty }) => {
  let inStock = qty < 50;

  let qtyClasses = !inStock ? styles.awalable : styles['not-awalable'];

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <img src={imageUrl} alt="kebab" width="450" />
      <p>Price {price}$</p>
      {/* <span className={qtyClasses}>{inStock ? 'Few left' : 'In stock'}</span> */}
      <QuantityValue isInStock={inStock}>
        {inStock ? 'Few left' : 'In stock'}
      </QuantityValue>
      <br></br>
      <br></br>
      <button type="button">Add to cart</button>
    </div>
  );
};

export default Product;

Product.defaultProps = {
  imageUrl:
    'https://media.istockphoto.com/photos/oops-404-error-page-not-found-futuristic-robot-concept-with-wire-picture-id642741626?s=612x612',
};

Product.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
