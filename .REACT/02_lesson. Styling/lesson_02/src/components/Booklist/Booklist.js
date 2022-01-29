import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

let List = styled.ul`
    padding: 0;
    margin: 0 5%;
    outline: 2px solid green;
`;

let ListItem = styled.li`
    background-color: gray;
    color: white;
    margin-bottom: 15px;
`;

let Booklist = ({ books }) => {
    return (
        <List>
            {books.map(({ id, title }) => (
                // <li key={id}>{title}</li>
                <ListItem key={id}>{title}</ListItem>
            ))}
        </List>
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

export default Booklist;
