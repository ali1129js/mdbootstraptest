/**
 * @Author: Ali Ismail
 * @Date:   2018-04-10T19:12:04+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-10T19:12:04+02:00
 */



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
