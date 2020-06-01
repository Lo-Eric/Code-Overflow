// import React from 'react';
// import ReactDOM from 'react-dom';
// import configureStore from './store/store';


// document.addEventListener('DOMContentLoaded', () => {
//     const store = configureStore();
//     const root = document.getElementById('root');

//     ReactDOM.render(<Root store={store} />, root);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Congrats />, root);
});
