import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <hr />
            {children}
        </div>
    );
};

export default Layout;
