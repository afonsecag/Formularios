import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './service-worker-registration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import localeEsMessages from "./locales/es.json";
import {IntlProvider} from 'react-intl';

var userLocale = window.navigator.language  

var m;

if (userLocale === 'es') {
  m = localeEsMessages;
  userLocale = "es-ES"
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLocale} messages={m}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
