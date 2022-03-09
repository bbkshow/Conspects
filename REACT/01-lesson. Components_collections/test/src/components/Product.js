import React from 'react';
import PropTypes from 'prop-types';

let Product = ({ name, imageUrl, price, qty }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt="kebab" width="450" />
      <p>Price {price}$</p>
      <p>{qty < 50 ? 'Few left' : 'In stock'}</p>
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
