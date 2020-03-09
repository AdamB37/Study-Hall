import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
