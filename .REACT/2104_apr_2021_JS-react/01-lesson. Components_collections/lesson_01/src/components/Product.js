import React from 'react';
import PropTypes from 'prop-types';

// # if с помощью логического оператора &&

// # if...else с помощью тернарного оператора

let Product = ({ name, imageUrl, price, qty }) => {
    // let { name, imageUrl, price } = props

    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} alt="kebab" width="450" />
            <p>'Price {price}$'</p>
            <p>{qty < 50 ? 'Few left' : 'In stock'}</p>
            <button type="button">'Add to cart'</button>
        </div>
    );
};

export default Product;

// default Props
Product.defaultProps = {
    imageUrl:
        'https://media.istockphoto.com/photos/3d-word-oops-picture-id1067573454?s=612x612',
};

// propTypes
Product.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
