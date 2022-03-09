import React from 'react';
import PropTypes from 'prop-types';

// let Booklist = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//     </ul>
//   );
// };

let Booklist = ({ books }) => {
  return (
    <ul>
      {books.map(({ id, tittle }) => (
        <li key={id}>{tittle}</li>
      ))}
    </ul>
  );
};
export default Booklist;

Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      tittle: PropTypes.string.isRequired,
    })
  ),
};
