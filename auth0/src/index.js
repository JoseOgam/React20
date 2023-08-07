import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-utpgge1e1noitqxz.us.auth0.com"
    clientId="PT3nctH6mKujVFSA72U7XhtvQEOzBCwD"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
