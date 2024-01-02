import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Home extends React.Component {
  render() {
    return (
      <div className="homeView">
        <h2>Home</h2>
        <h3>Select a flashcard deck or create a new one:</h3>

        <Link className="homeNav" to="/viewer">
          Go to card viewer
        </Link>
        <Link className="homeNav" to="/editor">
          Go to card editor
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {};
export default compose(
  firebaseConnect(["/homepage"]),
  connect(mapStateToProps)
)(Home);
