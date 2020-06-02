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
import Root from "./components/root";

// import Test from './test_home_page';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = SessionAPIUtil.login;
    window.signup = SessionAPIUtil.signup;
    window.logout = SessionAPIUtil.logout;

    ReactDOM.render(<Root store={store}/>, root);
});


//branch1 test edit
// branch 2 test