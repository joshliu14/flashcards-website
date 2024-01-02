import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCnydzPXrSgZuY5EO55rGlur1qNVxQ3pS0",
  authDomain: "bootcamp-1055d.firebaseapp.com",
  databaseURL: "https://bootcamp-1055d-default-rtdb.firebaseio.com",
  projectId: "bootcamp-1055d",
  storageBucket: "bootcamp-1055d.appspot.com",
  messagingSenderId: "667246364608",
  appId: "1:667246364608:web:d5cded077a27dc4d38ea25",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
