import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

let List = styled.ul`
  padding: 0;
  margin: 0 5%;
  outline: 2px solid green;
`;

let ListItem = styled.li`
  background-color: magenta;
  colot: white;
  margin-bottom: 15px;
`;

let Booklist = ({ books }) => {
  return (
    <List>
      {books.map(({ id, tittle }) => (
        // <li key={id}>{tittle}</li>
        <ListItem key={id}>{tittle}</ListItem>
      ))}
    </List>
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
