import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// CSS
// import './Product.css';

// SaSS
// import './Product.scss';

// Css Modules
import styles from './Product.module.css';

console.log(styles);

// ===================================================
// Styled Components

let QuantityValue = styled.span`
    font-weight: 600;
    color: ${props => (props.isInStock ? 'red' : 'green')};
`;
// props = {
//     pizza,
//     isInStock
// }

// props.pizza
// props.isInStock

// ${props => }

let Product = ({ name, imageUrl, price, qty }) => {
    let inStock = qty < 50;

    let quantityClases = !inStock ? styles.awaliable : styles['not-awaliable'];

    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{name}</h3>
            <img src={imageUrl} alt="kebab" width="450" />
            <p>Price {price}$</p>
            {/* <span className={quantityClases.join(' ')}> */}
            {/* <span className={quantityClases}>
                {inStock ? 'Few left' : 'In stock'}
            </span> */}

            <QuantityValue isInStock={inStock} pizza="carbonara">
                {inStock ? 'Few left' : 'In stock'}
            </QuantityValue>
            <br />
            <br />
            <button type="button">'Add to cart'</button>
        </div>
    );
};

export default Product;
// ===================================================

// CSS Modules
// ==========================
// let Product = ({ name, imageUrl, price, qty }) => {
//     let inStock = qty < 50;

//     let quantityClases = !inStock ? styles.awaliable : styles['not-awaliable'];

//     return (
//         <div className={styles.container}>
//             <h3 className={styles.name}>{name}</h3>
//             <img src={imageUrl} alt="kebab" width="450" />
//             <p>Price {price}$</p>
//             {/* <span className={quantityClases.join(' ')}> */}
//             <span className={quantityClases}>
//                 {inStock ? 'Few left' : 'In stock'}
//             </span>
//             <br />
//             <br />
//             <button type="button">'Add to cart'</button>
//         </div>
//     );
// };

// export default Product;

// ==========================

// ====================================
// Vanila CSS
// let Product = ({ name, imageUrl, price, qty }) => {
//     let inStock = qty < 50;

//     // let quantityClases = ['Product__qty'];

//     // 1. if...else
//     // if (inStock) {
//     //     quantityClases.push('awaliable');
//     // } else {
//     //     quantityClases.push('not-awaliable');
//     // }

//     // 2. ternary
//     // quantityClases.push(inStock ? 'awaliable' : 'not-awaliable');

//     // 3.
//     let quantityClases = [
//         'Product__qty',
//         inStock ? 'awaliable' : 'not-awaliable',
//     ];

//     let resultClass = quantityClases.join(' ');

//     // console.log(resultClass);
//     return (
//         <div className="Product">
//             <h3 className="Product__name ">{name}</h3>
//             <img src={imageUrl} alt="kebab" width="450" />
//             <p>Price {price}$</p>
//             {/* <span className={quantityClases.join(' ')}> */}
//             <span className={resultClass}>
//                 {inStock ? 'Few left' : 'In stock'}
//             </span>
//             <br />
//             <br />
//             <button type="button">'Add to cart'</button>
//         </div>
//     );
// };

// export default Product;
// ========================================

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
