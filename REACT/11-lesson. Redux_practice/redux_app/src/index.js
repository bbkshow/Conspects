import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

import './base.css';

// console.log(store);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);
