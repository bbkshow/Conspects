import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
    let { title, children } = props;

    return (
        <section>
            {/* <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1> */}
            {/* null
            undefuned
            false */}

            {/* // # if с помощью логического оператора && */}

            {title && <h1>{title}</h1>}
            {children}
        </section>
    );
};

Section.defaultProps = {
    title: 'Default section title',
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
