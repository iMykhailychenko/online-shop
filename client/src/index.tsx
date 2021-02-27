import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ModalComponent from './common/Modal';
import reportWebVitals from './reportWebVitals';
import App from './root/App';

ReactDOM.render(
    <React.StrictMode>
        <ModalComponent />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
