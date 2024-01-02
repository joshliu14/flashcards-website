import React from "react";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
const Test = (props) => {
  return <div>{props.flashcards.deck1.name}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  const flashcards = state.firebase.data.flashcards;
  return { flashcards: flashcards };
};

// export default firebaseConnect(["/flashcards"])(connect(mapStateToProps)(Test));
export default compose(
  firebaseConnect(["/flashcards"]),
  connect(mapStateToProps)
)(Test);
