// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
// Local imports
import App from './App';
import reducers from './reducers'
import reportWebVitals from './reportWebVitals';
import { fetchWeatherService } from "./context/middlewareServices";
// Assets
import "./css/style.css";
import "./index.css";

const middleware = applyMiddleware(fetchWeatherService);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(middleware)
  );

// INFO: Log the store activities
store.subscribe(() => {
  console.log("current state", store.getState());
  console.log("store", store);
});

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
