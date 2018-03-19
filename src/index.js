import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//semantic
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
//import App from components
import App from './components/app'
//import provider
import {Provider} from 'react-redux'
//import store
import {createStore} from 'redux'
//import reducers
import rootReducer from './reducers/user-reducer'
//import intial data

const store = createStore(rootReducer,
     window.devToolsExtension && window.devToolsExtension())
//console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

//http://s8.tinypic.com/fk6yck_th.jpg
//http://s5.tinypic.com/2qvcfvq_th.jpg
//http://s5.tinypic.com/dfwpd_th.jpg
//http://s8.tinypic.com/2w53kvk_th.jpg
