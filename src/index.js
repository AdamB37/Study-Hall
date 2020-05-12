import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import rootReducer from './reducers'
import { fetchFlashcards } from './actions'




const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById('root')
);

store.dispatch(fetchFlashcards()).then(() => console.log(store.getState()))
