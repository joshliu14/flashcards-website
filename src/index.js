import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { createStore, combineReducers } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";

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
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
