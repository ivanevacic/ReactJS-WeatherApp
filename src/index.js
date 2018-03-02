import React from 'react';
import ReactDOM from 'react-dom';
//  Imported Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
