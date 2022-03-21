import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import getAllUsers from "./redux/reducers/get_users";
import mySaga from "./redux/sagas/saga";
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({getAllUsers})

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
