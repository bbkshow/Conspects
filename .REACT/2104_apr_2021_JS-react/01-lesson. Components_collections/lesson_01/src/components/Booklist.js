import React from 'react';
import PropTypes from 'prop-types';

// let Booklist = ({ books }) => {
//     return (
//         <ul>
//             {books.map(book => (
//                 <li key={book.id}>{book.title}</li>
//             ))}
//         </ul>
//     );
// };

let Booklist = ({ books }) => {
    return (
        <ul>
            {books.map(({ id, title }) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    );
};

Booklist.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};

// optionalObjectWithStrictShape: PropTypes.exact({
//     name: PropTypes.string,
//     quantity: PropTypes.number
//   }),

// { id: 'id-5', title: 'Green Mile' },

export default Booklist;
