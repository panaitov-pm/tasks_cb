import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './View/Section/Tasks';
import * as serviceWorker from './serviceWorker';

import './scss/app.scss';

ReactDOM.render(<Tasks />, document.getElementById('task-list'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
