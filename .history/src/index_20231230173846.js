import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnydzPXrSgZuY5EO55rGlur1qNVxQ3pS0",
  authDomain: "bootcamp-1055d.firebaseapp.com",
  databaseURL: "https://bootcamp-1055d-default-rtdb.firebaseio.com",
  projectId: "bootcamp-1055d",
  storageBucket: "bootcamp-1055d.appspot.com",
  messagingSenderId: "667246364608",
  appId: "1:667246364608:web:d5cded077a27dc4d38ea25",
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
