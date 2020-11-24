import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {configureStore} from "@reduxjs/toolkit"
import {applyMiddleware, createStore, middleWare} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import rootReducer from "./Redux/reducer" 
// import actionTypes from "./Redux/actions"



const store = createStore(rootReducer, applyMiddleware(thunk))


console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
