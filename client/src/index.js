import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
