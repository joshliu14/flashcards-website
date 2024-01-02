import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Home extends React.Component {
  render() {
    if (!isLoaded(this.props.data)) {
      <div>Loading...</div>;
    }
    const deckIds = Object.keys(this.props.data);
    const path = `/viewer/${deckIds[0]}`
    return (
      <div className="homeView">
        <h2>Home</h2>
        <h3>Select a flashcard deck or create a new one:</h3>
        <Link className="homeNav" to=
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
const mapStateToProps = (state) => {
  return { data: state.firebase.data.homepage };
};
export default compose(
  firebaseConnect(["/homepage"]),
  connect(mapStateToProps)
)(Home);
