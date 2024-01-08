import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import Darkmode from 'darkmode-js';


const options = {
  bottom: '64px',
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#101623',
  buttonColorDark: '#f0f0f0',
  buttonColorLight: '#100f2c',
  saveInCookies: true,
  label: '🌓',
  autoMatchOsTheme: true,
};


const darkmode = new Darkmode(options);
darkmode.showWidget();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-83rczzza30aq7qla.us.auth0.com"
    clientId="dDsCDONwa8CaQyAYk8NZYwa8mzqHrccX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
<Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
);
