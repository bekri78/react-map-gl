import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

//redux
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { getPosts } from './actions/post.action';

const store = createStore(
  rootReducer, // somme de tous les reducers
  composeWithDevTools(applyMiddleware(thunk)) // toujours mettre thunks
  /*en mode developpement pour l'extension redux devtools
   a enlever en prod */
)

store.dispatch(getPosts())
// permet de rendre disponible dans l'application des le debut les données pour les afficher
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
